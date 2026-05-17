"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabaseBrowser";

type UiState = {
  error: string | null;
  info: string | null;
};

export default function AdminLoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/admin/cases";

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<UiState>({ error: null, info: null });

  const supabase = useMemo(() => supabaseBrowser(), []);

  useEffect(() => {
    const check = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const role =
        (session.user.app_metadata as { role?: string } | undefined)?.role ??
        (session.user.user_metadata as { role?: string } | undefined)?.role;

      if (role !== "admin") {
        await supabase.auth.signOut();
        setState({
          error: "Dieser Account hat keine Admin-Rolle.",
          info: null,
        });
        return;
      }

      router.replace(nextPath);
    };

    void check();
  }, [nextPath, router, supabase]);

  const handleMagicLink = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setState({ error: null, info: null });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const redirectTo = `${appUrl}/admin/login`;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    });

    setLoading(false);

    if (error) {
      setState({ error: error.message, info: null });
      return;
    }

    setState({
      error: null,
      info: "Magic Link gesendet. Bitte E-Mail oeffnen und den Link anklicken.",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-2xl border p-6">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <p className="mt-2 text-sm text-gray-600">
          Zugriff nur mit Supabase-Usern, die `app_metadata.role = admin` haben.
        </p>

        <form onSubmit={handleMagicLink} className="mt-6 space-y-3">
          <label className="block text-sm font-medium">E-Mail</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border px-3 py-2 text-sm"
            placeholder="admin@deine-domain.de"
          />

          <button
            disabled={loading}
            type="submit"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
          >
            {loading ? "Sende..." : "Magic Link senden"}
          </button>
        </form>

        {state.error ? <p className="mt-4 text-sm text-red-700">{state.error}</p> : null}
        {state.info ? <p className="mt-4 text-sm text-green-700">{state.info}</p> : null}

        <div className="mt-6 text-xs text-gray-500">
          <p>
            `next`: <span className="font-mono">{nextPath}</span>
          </p>
          <Link href="/start" className="underline">
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
