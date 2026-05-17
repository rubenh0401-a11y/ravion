import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { readCaseAccessToken } from "@/lib/caseAccess";
import { clientIpFromHeaders, rateLimit } from "@/lib/rateLimit";

const MAX_FILES_PER_REQUEST = 8;
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB
const LIMIT = 20;
const WINDOW_MS = 10 * 60 * 1000;
const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
]);

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: caseId } = await params;
  const token = readCaseAccessToken(req);

  try {
    const ip = clientIpFromHeaders(req.headers);
    const rl = rateLimit({
      key: `cases-attachments:${ip}`,
      limit: LIMIT,
      windowMs: WINDOW_MS,
    });

    if (!rl.allowed) {
      const retryAfter = Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000));
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Limit": String(LIMIT),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    const supabase = supabaseServer();
    let caseQuery = supabase.from("cases").select("id").eq("id", caseId);
    if (token) {
      caseQuery = caseQuery.eq("access_token", token);
    }
    const { data: caseRow, error: caseError } = await caseQuery.single();
    if (caseError || !caseRow) {
      return NextResponse.json({ error: "Case not found" }, { status: 404 });
    }

    const form = await req.formData();
    const files = form.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ ok: true, uploaded: 0 }, { status: 200 });
    }

    if (files.length > MAX_FILES_PER_REQUEST) {
      return NextResponse.json(
        { error: `Too many files. Max ${MAX_FILES_PER_REQUEST} files per request.` },
        { status: 400 }
      );
    }

    let uploaded = 0;

    for (const file of files) {
      if (!file || file.size === 0) continue;

      if (file.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { error: `File too large: ${file.name}. Max 10 MB per file.` },
          { status: 400 }
        );
      }

      const mimeType = (file.type || "").toLowerCase();
      if (!ALLOWED_MIME_TYPES.has(mimeType)) {
        return NextResponse.json(
          { error: `Unsupported file type: ${file.name}. Allowed: PDF, PNG, JPG.` },
          { status: 400 }
        );
      }

      const ext = file.name.includes(".") ? file.name.split(".").pop() : "bin";
      const filename = file.name || `file.${ext}`;
      const path = `${caseId}/${crypto.randomUUID()}-${filename}`;

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const up = await supabase.storage
        .from("case-attachments")
        .upload(path, buffer, {
          contentType: file.type || "application/octet-stream",
          upsert: false,
        });

      if (up.error) {
        console.error("upload error", up.error);
        continue; // optional -> nicht alles blockieren
      }

      const ins = await supabase.from("case_attachments").insert({
        case_id: caseId,
        path,
        filename,
        mime_type: file.type || null,
        size_bytes: file.size || null,
      });

      if (ins.error) {
        console.error("insert attachment error", ins.error);
        // Datei liegt dann im Storage, aber nicht in Tabelle – fürs MVP ok
      }

      uploaded += 1;
    }

    return NextResponse.json(
      { ok: true, uploaded },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": String(LIMIT),
          "X-RateLimit-Remaining": String(rl.remaining),
        },
      }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
