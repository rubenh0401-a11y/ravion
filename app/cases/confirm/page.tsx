import Link from "next/link";
import { cookies } from "next/headers";
import { supabaseServer } from "@/lib/supabaseServer";
import SendOfferButton from "./SendOfferButton";

type Lang = "de" | "en";

const copy = {
  de: {
    invalidTitle: "Ungültiger Fall-Link",
    invalidText: "Bitte nutze den Link aus deiner E-Mail.",
    notFoundTitle: "Fall nicht gefunden",
    notFoundText: "Bitte prüfe den Link.",
    newCase: "Neuen Fall starten",
    yourCase: "Dein Fall",
    caseId: "Case-ID:",
    note: "Hinweis: Die Einschätzung ist unverbindlich und keine Rechtsberatung.",
    statusTitle: "Status deines Falls",
    steps: [
      { key: "submitted", label: "Fall eingereicht" },
      { key: "under_review", label: "In Prüfung" },
      { key: "review_complete", label: "Prüfung abgeschlossen" },
      { key: "offer_sent", label: "Vergleich gesendet" },
      { key: "closed", label: "Abgeschlossen" },
    ],
    sbReviewDoneTitle: "Prüfung abgeschlossen",
    sbReviewDoneText: "Wir haben deinen Fall geprüft und eine Einschätzung erstellt.",
    sbOfferSentTitle: "Vergleich versendet",
    sbOfferSentText: "Wir haben deinen Vergleichsvorschlag an die Gegenseite gesendet.",
    sbCheckingTitle: "Wir prüfen deinen Fall",
    sbCheckingText: "Unser Team ist dran.",
    sbDue: "Voraussichtlich bis:",
    resultTitle: "Unsere Einschätzung",
    win: "Erfolgswahrscheinlichkeit",
    claim: "Deine Forderung",
    offer: "Unverbindlicher Vergleichsvorschlag",
  },
  en: {
    invalidTitle: "Invalid case link",
    invalidText: "Please use the link from your email.",
    notFoundTitle: "Case not found",
    notFoundText: "Please verify the link.",
    newCase: "Start new case",
    yourCase: "Your case",
    caseId: "Case ID:",
    note: "Note: This assessment is non-binding and not legal advice.",
    statusTitle: "Case status",
    steps: [
      { key: "submitted", label: "Case submitted" },
      { key: "under_review", label: "Under review" },
      { key: "review_complete", label: "Review complete" },
      { key: "offer_sent", label: "Offer sent" },
      { key: "closed", label: "Closed" },
    ],
    sbReviewDoneTitle: "Review complete",
    sbReviewDoneText: "We reviewed your case and prepared an assessment.",
    sbOfferSentTitle: "Offer sent",
    sbOfferSentText: "We sent your settlement proposal to the counterparty.",
    sbCheckingTitle: "We are reviewing your case",
    sbCheckingText: "Our team is currently working on it.",
    sbDue: "Expected by:",
    resultTitle: "Our assessment",
    win: "Success probability",
    claim: "Your claim",
    offer: "Non-binding settlement proposal",
  },
} as const;

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; t?: string }>;
}) {
  const { id, t } = await searchParams;
  const cookieStore = await cookies();
  const lang: Lang = cookieStore.get("site_lang")?.value === "de" ? "de" : "en";
  const tr = copy[lang];

  if (!id) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-xl rounded-2xl border p-6">
          <h1 className="text-2xl font-semibold">{tr.invalidTitle}</h1>
          <p className="mt-2 text-sm text-gray-600">{tr.invalidText}</p>
          <Link href="/start" className="mt-4 inline-block underline text-sm">
            {tr.newCase}
          </Link>
        </div>
      </main>
    );
  }

  const supabase = supabaseServer();
  const query = supabase.from("cases").select("*").eq("id", id);
  const { data, error } = t ? await query.eq("access_token", t).single() : await query.single();

  if (error || !data) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-xl rounded-2xl border p-6">
          <h1 className="text-2xl font-semibold">{tr.notFoundTitle}</h1>
          <p className="mt-2 text-sm text-gray-600">{tr.notFoundText}</p>
          <Link href="/start" className="mt-4 inline-block underline text-sm">
            {tr.newCase}
          </Link>
        </div>
      </main>
    );
  }

  const status = String(data.status ?? "").trim();

  return (
    <main className="min-h-screen p-6 flex items-start justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <header className="rounded-2xl border p-6">
          <h1 className="text-2xl font-semibold">{tr.yourCase}</h1>
          <p className="mt-1 text-sm text-gray-600">
            {tr.caseId} <span className="font-mono">{data.id.slice(0, 8)}</span>
          </p>
        </header>

        <StatusBox status={status} reviewDueAt={data.review_due_at} t={tr} />
        <StatusTimeline status={status} t={tr} />
        {status === "review_complete" && (
          <>
            <ResultBox
              winProbability={data.win_probability}
              offerEur={data.offer_eur}
              claimEur={data.claim_eur}
              t={tr}
            />
            <SendOfferButton id={data.id} accessToken={t} lang={lang} />
          </>
        )}

        <footer className="rounded-2xl border p-6 text-xs text-gray-500">{tr.note}</footer>
      </div>
    </main>
  );
}

function StatusBox({
  status,
  reviewDueAt,
  t,
}: {
  status: string;
  reviewDueAt: string;
  t: (typeof copy)["de"] | (typeof copy)["en"];
}) {
  if (status === "review_complete") {
    return (
      <div className="rounded-2xl border p-6">
        <h2 className="text-lg font-semibold">{t.sbReviewDoneTitle}</h2>
        <p className="mt-2 text-sm text-gray-700">{t.sbReviewDoneText}</p>
      </div>
    );
  }

  if (status === "offer_sent") {
    return (
      <div className="rounded-2xl border p-6">
        <h2 className="text-lg font-semibold">{t.sbOfferSentTitle}</h2>
        <p className="mt-2 text-sm text-gray-700">{t.sbOfferSentText}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border p-6">
      <h2 className="text-lg font-semibold">{t.sbCheckingTitle}</h2>
      <p className="mt-2 text-sm text-gray-700">{t.sbCheckingText}</p>
      <p className="mt-2 text-sm text-gray-600">
        {t.sbDue} <span className="font-medium">{new Date(reviewDueAt).toLocaleString()}</span>
      </p>
    </div>
  );
}

function ResultBox({
  winProbability,
  offerEur,
  claimEur,
  t,
}: {
  winProbability: number | null;
  offerEur: number | null;
  claimEur: number | null;
  t: (typeof copy)["de"] | (typeof copy)["en"];
}) {
  return (
    <div className="rounded-2xl border p-6 space-y-4">
      <h2 className="text-lg font-semibold">{t.resultTitle}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Metric label={t.win} value={winProbability != null ? `${winProbability} %` : "-"} />
        <Metric label={t.claim} value={claimEur != null ? `${claimEur} EUR` : "-"} />
      </div>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="text-sm font-medium">{t.offer}</div>
        <div className="mt-1 text-2xl font-semibold">{offerEur != null ? `${offerEur} EUR` : "-"}</div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function StatusTimeline({
  status,
  t,
}: {
  status: string;
  t: (typeof copy)["de"] | (typeof copy)["en"];
}) {
  const currentIndex = t.steps.findIndex((s) => s.key === status);
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="text-lg font-semibold mb-4">{t.statusTitle}</h2>
      <ol className="space-y-3">
        {t.steps.map((step, index) => {
          const done = index <= currentIndex;
          return (
            <li key={step.key} className="flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${done ? "bg-black" : "bg-gray-300"}`} />
              <span className={`text-sm ${done ? "font-medium text-black" : "text-gray-400"}`}>
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
