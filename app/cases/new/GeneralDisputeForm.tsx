"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Relation = "B2C" | "B2B" | "C2C";
type Lang = "de" | "en";

const copy = {
  de: {
    netErr: "Netzwerkfehler",
    unknownErr: "Unbekannter Fehler",
    s1: "1) Streitfall",
    s2: "2) Parteien",
    s3: "3) Forderung",
    s4: "4) Anhänge (optional)",
    disputeTitle: "Titel des Streitfalls",
    disputeDesc: "Beschreibung",
    incidentDate: "Datum des Vorfalls",
    dueDate: "Frist / Zahlungsziel (optional)",
    claimant: "Antragsteller",
    respondent: "Gegenseite",
    claimantB2B: "Antragsteller (Unternehmen)",
    respondentB2B: "Gegenseite (Unternehmen)",
    refOwn: "Eigene Referenz (optional)",
    refOther: "Referenz Gegenseite (optional)",
    claim: "Forderung (EUR)",
    email: "Kontakt-E-Mail",
    outcome: "Gewünschtes Ergebnis (optional)",
    uploadHint:
      "Lade relevante Dokumente hoch (z. B. Vertrag, Rechnung, Chat-/E-Mail-Verlauf, Belege).",
    limits: "Optional - max. 8 Dateien, je Datei max. 10 MB, erlaubt: PDF/PNG/JPG.",
    chooseFiles: "Dateien auswählen",
    noFiles: "Keine Datei ausgewählt",
    filesSelected: "Dateien ausgewählt",
    agree:
      "Ich bestätige, dass die Angaben korrekt sind. Einschätzung unverbindlich, keine Rechtsberatung.",
    submit: "Fall einreichen ->",
    sending: "Sende...",
  },
  en: {
    netErr: "Network error",
    unknownErr: "Unknown error",
    s1: "1) Dispute",
    s2: "2) Parties",
    s3: "3) Claim",
    s4: "4) Attachments (optional)",
    disputeTitle: "Dispute title",
    disputeDesc: "Description",
    incidentDate: "Incident date",
    dueDate: "Deadline / due date (optional)",
    claimant: "Claimant",
    respondent: "Respondent",
    claimantB2B: "Claimant (business)",
    respondentB2B: "Respondent (business)",
    refOwn: "Your reference (optional)",
    refOther: "Counterparty reference (optional)",
    claim: "Claim amount (EUR)",
    email: "Contact email",
    outcome: "Desired outcome (optional)",
    uploadHint:
      "Upload relevant documents (e.g. contract, invoice, email/chat trail, receipts).",
    limits: "Optional - max 8 files, max 10 MB each, allowed: PDF/PNG/JPG.",
    chooseFiles: "Choose files",
    noFiles: "No file selected",
    filesSelected: "files selected",
    agree:
      "I confirm the information is correct. Assessment is non-binding and not legal advice.",
    submit: "Submit case ->",
    sending: "Sending...",
  },
} as const;

export default function GeneralDisputeForm({
  relation,
  lang,
  categoryOverride,
}: {
  relation: Relation;
  lang: Lang;
  categoryOverride?: string;
}) {
  const t = copy[lang];
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const category =
    categoryOverride ?? (relation === "B2B" ? "commercial_dispute" : "consumer_dispute");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const files = form.getAll("attachments") as File[];

    const payload = {
      relation_type: relation,
      category,
      claim_eur: Number(form.get("claimEur") || 0) || null,
      contact_email: String(form.get("email") || ""),
      facts: {
        dispute_title: String(form.get("disputeTitle") || ""),
        dispute_description: String(form.get("disputeDescription") || ""),
        incident_date: String(form.get("incidentDate") || ""),
        due_date: String(form.get("dueDate") || ""),
        claimant_name: String(form.get("claimantName") || ""),
        respondent_name: String(form.get("respondentName") || ""),
        claimant_reference: String(form.get("claimantReference") || ""),
        respondent_reference: String(form.get("respondentReference") || ""),
        desired_outcome: String(form.get("desiredOutcome") || ""),
        attachments_count: files?.filter(Boolean).length ?? 0,
      },
    };

    try {
      const res = await fetch("/api/cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) {
        setErr(json?.error ?? t.unknownErr);
        setLoading(false);
        return;
      }

      const caseId = json.id as string;
      const accessToken = json.access_token as string | undefined;

      const realFiles = (files || []).filter((f) => f && f.size > 0);
      if (realFiles.length > 0) {
        const fd = new FormData();
        for (const f of realFiles) fd.append("files", f);

        await fetch(`/api/cases/${caseId}/attachments`, {
          method: "POST",
          headers: accessToken ? { "x-case-token": accessToken } : undefined,
          body: fd,
        });
      }

      setLoading(false);
      router.push(`/cases/confirm?id=${caseId}${accessToken ? `&t=${encodeURIComponent(accessToken)}` : ""}`);
    } catch {
      setErr(t.netErr);
      setLoading(false);
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.s1}</h2>
        <Field
          label={t.disputeTitle}
          name="disputeTitle"
          required
          placeholder={
            relation === "B2B"
              ? lang === "en"
                ? "e.g. Outstanding invoice from project X"
                : "z. B. Offene Rechnung aus Projekt X"
              : lang === "en"
                ? "e.g. Private sale: item not as described"
                : "z. B. Privatkauf: Ware nicht wie beschrieben"
          }
        />
        <div className="space-y-1">
          <label className="text-sm font-medium">{t.disputeDesc} *</label>
          <textarea
            name="disputeDescription"
            required
            className="w-full min-h-[120px] rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={t.incidentDate} name="incidentDate" type="date" />
          <Field label={t.dueDate} name="dueDate" type="date" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.s2}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={relation === "B2B" ? t.claimantB2B : t.claimant} name="claimantName" required />
          <Field label={relation === "B2B" ? t.respondentB2B : t.respondent} name="respondentName" required />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={t.refOwn} name="claimantReference" />
          <Field label={t.refOther} name="respondentReference" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.s3}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={t.claim}
            name="claimEur"
            type="number"
            required
            placeholder={lang === "en" ? "e.g. 1200" : "z. B. 1200"}
          />
          <Field
            label={t.email}
            name="email"
            type="email"
            required
            placeholder={lang === "en" ? "you@example.com" : "du@beispiel.de"}
          />
        </div>
        <Field label={t.outcome} name="desiredOutcome" />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.s4}</h2>
        <div className="rounded-2xl border p-4 space-y-2">
          <div className="text-sm text-gray-700">{t.uploadHint}</div>
          <FilePicker
            name="attachments"
            multiple
            accept=".pdf,.png,.jpg,.jpeg"
            chooseLabel={t.chooseFiles}
            emptyLabel={t.noFiles}
            selectedLabel={t.filesSelected}
          />
          <div className="text-xs text-gray-500">{t.limits}</div>
        </div>
      </section>

      <section className="space-y-2">
        <label className="flex items-start gap-3 text-sm">
          <input required type="checkbox" className="mt-1" name="agree" value="yes" />
          <span className="text-gray-700">{t.agree}</span>
        </label>
      </section>

      {err && <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm">{err}</div>}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
      >
        {loading ? t.sending : t.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}

function FilePicker({
  name,
  accept,
  multiple = false,
  chooseLabel,
  emptyLabel,
  selectedLabel,
}: {
  name: string;
  accept?: string;
  multiple?: boolean;
  chooseLabel: string;
  emptyLabel: string;
  selectedLabel: string;
}) {
  const [count, setCount] = useState(0);

  return (
    <label className="flex flex-wrap items-center gap-3 text-sm">
      <span className="rounded-xl border px-4 py-2 font-medium">{chooseLabel}</span>
      <span className="text-gray-700">{count > 0 ? `${count} ${selectedLabel}` : emptyLabel}</span>
      <input
        type="file"
        name={name}
        multiple={multiple}
        accept={accept}
        className="sr-only"
        onChange={(e) => setCount(e.currentTarget.files?.length ?? 0)}
      />
    </label>
  );
}
