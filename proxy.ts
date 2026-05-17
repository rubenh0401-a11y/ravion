import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/auth-helpers-nextjs";

export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const isAdminPage = pathname.startsWith("/admin");
  const isAdminApi = pathname.startsWith("/api/admin");
  const isDashboard = pathname === "/dashboard";

  if (!isAdminPage && !isAdminApi && !isDashboard) {
    return NextResponse.next();
  }

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    if (isAdminApi) {
      return NextResponse.json({ error: "Supabase config missing" }, { status: 500 });
    }
    const target = req.nextUrl.clone();
    target.pathname = "/admin/login";
    target.searchParams.set("error", "config_missing");
    return NextResponse.redirect(target);
  }

  const res = NextResponse.next();
  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return req.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          res.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    if (isAdminApi) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const target = req.nextUrl.clone();
    target.pathname = "/admin/login";
    target.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(target);
  }

  const role =
    (session.user.app_metadata as { role?: string } | undefined)?.role ??
    (session.user.user_metadata as { role?: string } | undefined)?.role;

  if (role !== "admin") {
    if (isAdminApi) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const target = req.nextUrl.clone();
    target.pathname = "/admin/login";
    target.searchParams.set("error", "not_allowed");
    return NextResponse.redirect(target);
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*", "/dashboard"],
};
