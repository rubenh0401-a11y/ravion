"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabaseBrowser";

export default function AdminLogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onLogout = async () => {
    setLoading(true);
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
    setLoading(false);
  };

  return (
    <button
      type="button"
      onClick={onLogout}
      disabled={loading}
      className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-60"
    >
      {loading ? "Abmelden..." : "Abmelden"}
    </button>
  );
}
