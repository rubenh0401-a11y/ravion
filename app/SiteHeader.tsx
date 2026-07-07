"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

type Lang = "de" | "en";

type NavChild = { href: string; label: string };
type NavItem = { href: string; label: string; children?: NavChild[] };

function startsActive(pathname: string, href: string) {
  return pathname === href || (href !== "/start" && pathname.startsWith(href));
}

export default function SiteHeader({ initialLang }: { initialLang: Lang }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>(initialLang);

  const passengerChildren =
    lang === "en"
      ? [
          { href: "/fluggastrechte-ueberblick", label: "Flight rights" },
          { href: "/fahrgastrechte-ueberblick", label: "Rail rights (DB)" },
        ]
      : [
          { href: "/fluggastrechte-ueberblick", label: "Fluggastrechte" },
          { href: "/fahrgastrechte-ueberblick", label: "Fahrgastrechte (DB)" },
        ];

  const navItems: NavItem[] =
    lang === "en"
      ? [
          { href: "/start", label: "Home" },
          { href: "/warum-schlichtung", label: "Why Ravion" },
          { href: "/passagierrechte", label: "Passenger rights", children: passengerChildren },
          { href: "/cases/find", label: "Find case" },
          { href: "/wie-es-funktioniert", label: "How it works" },
        ]
      : [
          { href: "/start", label: "Start" },
          { href: "/warum-schlichtung", label: "Warum Ravion" },
          { href: "/passagierrechte", label: "Passagierrechte", children: passengerChildren },
          { href: "/cases/find", label: "Fall finden" },
          { href: "/wie-es-funktioniert", label: "Wie es funktioniert" },
        ];

  const passengerActive =
    startsActive(pathname, "/passagierrechte") ||
    startsActive(pathname, "/fluggastrechte-ueberblick") ||
    startsActive(pathname, "/fahrgastrechte-ueberblick");
  const solutionsActive = startsActive(pathname, "/solutions");
  const solutionsLabel = lang === "en" ? "For airlines" : "Für Airlines";

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6">
      <div className="app-wrap">
        <div
          className="soft-card px-4 py-3"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--surface-strong) 95%, #e9edf1) 0%, color-mix(in oklab, var(--surface-strong) 97%, #f1f3f6) 100%)",
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/start" className="flex items-center text-lg font-semibold tracking-tight">
              <Image src="/ravion-logo.png" alt="Ravion" width={132} height={90} className="h-9 w-auto" priority />
            </Link>

            <div className="flex items-center gap-2">
              <LanguageSwitcher lang={lang} onChange={setLang} />
              <button
                type="button"
                className="sm:hidden rounded-full border px-3 py-1.5 text-sm"
                style={{ borderColor: "var(--border)" }}
                onClick={() => setOpen((v) => !v)}
                aria-label={lang === "en" ? "Open navigation" : "Navigation öffnen"}
              >
                {lang === "en" ? "Menu" : "Menü"}
              </button>
            </div>

            <nav className="hidden items-center gap-2 sm:flex">
              <Link
                href="/solutions"
                className={`mr-1 -translate-y-1.5 rounded-full border px-3.5 py-1.5 text-sm font-semibold shadow-sm transition hover:-translate-y-2 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  solutionsActive ? "text-white" : "text-blue-900"
                }`}
                style={
                  solutionsActive
                    ? {
                        borderColor: "var(--brand)",
                        background: "var(--brand)",
                      }
                    : {
                        borderColor: "color-mix(in oklab, var(--brand) 42%, transparent)",
                        background: "color-mix(in oklab, #ffffff 92%, var(--brand))",
                      }
                }
              >
                {solutionsLabel}
              </Link>
              {navItems.map((item) => {
                const active =
                  item.href === "/passagierrechte" ? passengerActive : startsActive(pathname, item.href);

                if (!item.children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-full px-3 py-1.5 text-sm transition ${
                        active ? "font-semibold" : "brand-link"
                      }`}
                      style={
                        active
                          ? {
                              background: "color-mix(in oklab, var(--surface) 90%, #e9edf2)",
                              border: "1px solid var(--brand)",
                            }
                          : undefined
                      }
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={`rounded-full px-3 py-1.5 text-sm transition ${
                        active ? "font-semibold" : "brand-link"
                      }`}
                      style={
                        active
                          ? {
                              background: "color-mix(in oklab, var(--surface) 90%, #e9edf2)",
                              border: "1px solid var(--brand)",
                            }
                          : undefined
                      }
                    >
                      {item.label}
                    </Link>
                    <div
                      className="invisible absolute left-0 top-full z-40 mt-2 w-56 rounded-xl border p-1 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                      style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-lg px-3 py-2 text-sm ${
                            startsActive(pathname, child.href) ? "font-semibold" : ""
                          }`}
                          style={{
                            color: startsActive(pathname, child.href) ? "var(--foreground)" : "var(--muted)",
                            background: startsActive(pathname, child.href)
                              ? "color-mix(in oklab, var(--surface) 90%, #e9edf2)"
                              : "transparent",
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </nav>
          </div>

          {open ? (
            <nav className="mt-3 grid gap-2 sm:hidden">
              <Link
                href="/solutions"
                onClick={() => setOpen(false)}
                className={`mb-1 block rounded-lg border px-3 py-2 text-sm font-semibold shadow-sm ${
                  solutionsActive ? "text-white" : "text-blue-900"
                }`}
                style={
                  solutionsActive
                    ? {
                        borderColor: "var(--brand)",
                        background: "var(--brand)",
                      }
                    : {
                        borderColor: "color-mix(in oklab, var(--brand) 42%, transparent)",
                        background: "color-mix(in oklab, #ffffff 92%, var(--brand))",
                      }
                }
              >
                {solutionsLabel}
              </Link>
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg border px-3 py-2 text-sm ${
                      (item.href === "/passagierrechte" ? passengerActive : startsActive(pathname, item.href))
                        ? "font-semibold"
                        : ""
                    }`}
                    style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-1 grid gap-1 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`rounded-lg px-3 py-1.5 text-sm ${
                            startsActive(pathname, child.href) ? "font-semibold" : ""
                          }`}
                          style={{ color: "var(--muted)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
