"use client";

import { useRouter } from "next/navigation";

type Lang = "de" | "en";

const COOKIE_NAME = "site_lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export default function LanguageSwitcher({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (next: Lang) => void;
}) {
  const router = useRouter();

  const setLanguage = (next: Lang) => {
    if (next === lang) return;
    document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
    onChange(next);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={`rounded-full border px-2 py-1 text-xs ${
          lang === "de" ? "font-semibold" : ""
        }`}
        style={{ borderColor: "var(--border)", background: lang === "de" ? "var(--surface)" : "transparent" }}
        aria-label="Sprache Deutsch"
        title="Deutsch"
      >
        🇩🇪
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full border px-2 py-1 text-xs ${
          lang === "en" ? "font-semibold" : ""
        }`}
        style={{ borderColor: "var(--border)", background: lang === "en" ? "var(--surface)" : "transparent" }}
        aria-label="Language English"
        title="English"
      >
        🇬🇧
      </button>
    </div>
  );
}
