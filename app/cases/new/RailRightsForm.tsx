"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Relation = "B2C";
type Lang = "de" | "en";

const copy = {
  de: {
    netErr: "Netzwerkfehler",
    unknownErr: "Unbekannter Fehler",
    section1: "1) Reise & Ereignis",
    railCompany: "Bahnunternehmen",
    orderNumber: "Auftragsnummer",
    trainNumber: "Zugnummer (optional)",
    from: "Startbahnhof",
    to: "Zielbahnhof",
    date: "Reisedatum",
    eventType: "Was ist passiert?",
    eventOptions: [
      ["delay", "Verspätung"],
      ["cancellation", "Zugausfall"],
      ["missed_connection", "Anschluss verpasst"],
      ["other", "Sonstiges"],
    ] as Array<[string, string]>,
    choose: "Bitte auswählen",
    delayMinutes: "Verspätung bei Ankunft (Minuten)",
    reason: "Begründung des Bahnunternehmens (optional)",
    contacted: "Hast du das Bahnunternehmen bereits kontaktiert?",
    yes: "Ja",
    no: "Nein",
    contactRef: "Referenznummer / Vorgangsnummer (optional)",
    correspondence: "Korrespondenz mit Bahnunternehmen (optional)",
    correspondenceHint: "Optional: Antwortmail, Chatverlauf oder Schreiben hochladen.",
    section2: "2) Antragssteller & Forderung",
    applicantFirstName: "Vorname der antragstellenden Person",
    applicantLastName: "Nachname der antragstellenden Person",
    claim: "Gewünschter Betrag (gesamt, EUR)",
    email: "Kontakt-E-Mail",
    optionalBreakdown: "Optional: Wie setzt sich der Betrag zusammen?",
    compensation: "Entschädigung",
    ticketRefund: "Ticket-Erstattung",
    additionalCosts: "Zusatzkosten (Hotel/Taxi etc.)",
    sum: "Summe (optional):",
    useSum: "Summe in \"gesamt\" übernehmen",
    section3: "3) Zusätzliche Infos (optional)",
    freeText: "Freitext",
    freeTextHint: "Optional - hilft uns ggf. bei einer schnelleren Einschätzung.",
    section4: "4) Reisende Personen",
    travelerCount: "Wie viele Personen betrifft der Fall?",
    travelerLabel: "Reisende Person",
    travelerFirstName: "Vorname",
    travelerLastName: "Nachname",
    section5: "5) Anhänge (optional)",
    uploadHint: "Lade relevante Unterlagen hoch (z. B. Ticket, Verspätungsnachweis, Belege).",
    uploadLimits: "Optional - max. 8 Dateien, je Datei max. 10 MB, erlaubt: PDF/PNG/JPG.",
    agree: "Ich bestätige, dass die Angaben korrekt sind. Einschätzung unverbindlich, keine Rechtsberatung.",
    submit: "Fall einreichen ->",
    sending: "Sende...",
  },
  en: {
    netErr: "Network error",
    unknownErr: "Unknown error",
    section1: "1) Trip & event",
    railCompany: "Rail operator",
    orderNumber: "Order number",
    trainNumber: "Train number (optional)",
    from: "Departure station",
    to: "Arrival station",
    date: "Travel date",
    eventType: "What happened?",
    eventOptions: [
      ["delay", "Delay"],
      ["cancellation", "Cancellation"],
      ["missed_connection", "Missed connection"],
      ["other", "Other"],
    ] as Array<[string, string]>,
    choose: "Please select",
    delayMinutes: "Arrival delay (minutes)",
    reason: "Operator reason (optional)",
    contacted: "Have you already contacted the rail operator?",
    yes: "Yes",
    no: "No",
    contactRef: "Reference / case number (optional)",
    correspondence: "Rail correspondence (optional)",
    correspondenceHint: "Optional: upload reply mail, chat transcript, or written response.",
    section2: "2) Applicant & claim",
    applicantFirstName: "Applicant first name",
    applicantLastName: "Applicant last name",
    claim: "Requested amount (total, EUR)",
    email: "Contact email",
    optionalBreakdown: "Optional: amount breakdown",
    compensation: "Compensation",
    ticketRefund: "Ticket refund",
    additionalCosts: "Additional costs (hotel/taxi etc.)",
    sum: "Total (optional):",
    useSum: "Use sum as total claim",
    section3: "3) Additional info (optional)",
    freeText: "Free text",
    freeTextHint: "Optional - can speed up review.",
    section4: "4) Travelers",
    travelerCount: "How many people does this concern?",
    travelerLabel: "Traveler",
    travelerFirstName: "First name",
    travelerLastName: "Last name",
    section5: "5) Attachments (optional)",
    uploadHint: "Upload relevant documents (e.g. ticket, delay proof, receipts).",
    uploadLimits: "Optional - max 8 files, max 10 MB each, allowed: PDF/PNG/JPG.",
    agree: "I confirm the information is correct. Assessment is non-binding and not legal advice.",
    submit: "Submit case ->",
    sending: "Sending...",
  },
} as const;

export default function RailRightsForm({
  relation,
  lang,
}: {
  relation: Relation;
  lang: Lang;
}) {
  const t = copy[lang];
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [contactedCompany, setContactedCompany] = useState<"yes" | "no">("no");
  const [travelerCount, setTravelerCount] = useState(1);

  const [parts, setParts] = useState({
    compensation: "",
    ticketRefund: "",
    additionalCosts: "",
  });

  const computedTotal = useMemo(() => {
    const nums = [parts.compensation, parts.ticketRefund, parts.additionalCosts].map(
      (v) => Number(String(v).replace(",", ".")) || 0
    );
    return nums.reduce((a, b) => a + b, 0);
  }, [parts]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const files = form.getAll("attachments") as File[];
    const correspondenceFiles = form.getAll("correspondence") as File[];
    const uploadFiles = [...files, ...correspondenceFiles].filter((f) => f && f.size > 0);
    const travelers = Array.from({ length: travelerCount }, (_, index) => ({
      first_name: String(form.get(`travelerFirstName_${index + 1}`) || ""),
      last_name: String(form.get(`travelerLastName_${index + 1}`) || ""),
    }));

    const payload = {
      relation_type: relation,
      category: "rail_rights",
      claim_eur: Number(form.get("claimEur") || 0) || null,
      contact_email: String(form.get("email") || ""),
      facts: {
        rail_company: String(form.get("railCompany") || ""),
        order_number: String(form.get("orderNumber") || ""),
        train_number: String(form.get("trainNumber") || ""),
        from_station: String(form.get("fromStation") || ""),
        to_station: String(form.get("toStation") || ""),
        travel_date: String(form.get("travelDate") || ""),
        event_type: String(form.get("eventType") || ""),
        delay_minutes: Number(form.get("delayMinutes") || 0) || null,
        operator_reason: String(form.get("operatorReason") || ""),
        applicant_first_name: String(form.get("applicantFirstName") || ""),
        applicant_last_name: String(form.get("applicantLastName") || ""),
        contacted_operator: contactedCompany === "yes",
        operator_contact_reference: String(form.get("operatorContactReference") || ""),
        traveler_count: travelerCount,
        travelers,
        additional_info: String(form.get("additionalInfo") || ""),
        breakdown: {
          compensation: Number(form.get("part_compensation") || 0) || null,
          ticket_refund: Number(form.get("part_ticketRefund") || 0) || null,
          additional_costs: Number(form.get("part_additionalCosts") || 0) || null,
        },
        attachments_count: uploadFiles.length,
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

      if (uploadFiles.length > 0) {
        const fd = new FormData();
        for (const f of uploadFiles) fd.append("files", f);

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
    <form className="mt-8 space-y-8" onSubmit={onSubmit}>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.section1}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={t.railCompany}
            name="railCompany"
            placeholder={lang === "en" ? "e.g. Deutsche Bahn" : "z. B. Deutsche Bahn"}
            required
          />
          <Field
            label={t.orderNumber}
            name="orderNumber"
            placeholder={lang === "en" ? "e.g. 123456789" : "z. B. 123456789"}
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={t.trainNumber}
            name="trainNumber"
            placeholder={lang === "en" ? "e.g. ICE 123" : "z. B. ICE 123"}
          />
          <Field label={t.date} name="travelDate" type="date" required />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={t.from} name="fromStation" required />
          <Field label={t.to} name="toStation" required />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Select label={t.eventType} name="eventType" required options={t.eventOptions} choose={t.choose} />
          <Field
            label={t.delayMinutes}
            name="delayMinutes"
            type="number"
            placeholder={lang === "en" ? "e.g. 75" : "z. B. 75"}
          />
        </div>

        <Field
          label={t.reason}
          name="operatorReason"
          placeholder={lang === "en" ? "e.g. signal disruption / technical issue" : "z. B. Signalstörung / technischer Defekt"}
        />

        <div className="space-y-1">
          <label className="text-sm font-medium">{t.contacted}</label>
          <select
            name="contactedOperator"
            value={contactedCompany}
            onChange={(e) => setContactedCompany(e.target.value as "yes" | "no")}
            className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          >
            <option value="no">{t.no}</option>
            <option value="yes">{t.yes}</option>
          </select>
        </div>

        {contactedCompany === "yes" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label={t.contactRef}
              name="operatorContactReference"
              placeholder={lang === "en" ? "e.g. DB-12345" : "z. B. DB-12345"}
            />
            <div className="space-y-1">
              <label className="text-sm font-medium">{t.correspondence}</label>
              <input
                type="file"
                name="correspondence"
                multiple
                className="block w-full text-sm"
                accept=".pdf,.png,.jpg,.jpeg"
              />
              <div className="text-xs text-gray-500">{t.correspondenceHint}</div>
            </div>
          </div>
        ) : null}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.section2}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={t.applicantFirstName}
            name="applicantFirstName"
            placeholder={lang === "en" ? "e.g. Anna" : "z. B. Anna"}
            required
          />
          <Field
            label={t.applicantLastName}
            name="applicantLastName"
            placeholder={lang === "en" ? "e.g. Schmidt" : "z. B. Schmidt"}
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={t.claim}
            name="claimEur"
            type="number"
            placeholder={lang === "en" ? "e.g. 120" : "z. B. 120"}
            required
          />
          <Field
            label={t.email}
            name="email"
            type="email"
            placeholder={lang === "en" ? "you@example.com" : "du@beispiel.de"}
            required
          />
        </div>

        <div className="rounded-2xl border p-4 space-y-3">
          <div className="text-sm font-medium">{t.optionalBreakdown}</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniMoney
              label={t.compensation}
              name="part_compensation"
              value={parts.compensation}
              onChange={(v) => setParts((s) => ({ ...s, compensation: v }))}
            />
            <MiniMoney
              label={t.ticketRefund}
              name="part_ticketRefund"
              value={parts.ticketRefund}
              onChange={(v) => setParts((s) => ({ ...s, ticketRefund: v }))}
            />
            <MiniMoney
              label={t.additionalCosts}
              name="part_additionalCosts"
              value={parts.additionalCosts}
              onChange={(v) => setParts((s) => ({ ...s, additionalCosts: v }))}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm text-gray-700">
              {t.sum} <span className="font-semibold">{computedTotal} EUR</span>
            </div>
            <button
              type="button"
              className="rounded-xl border px-4 py-2 text-sm font-medium"
              onClick={() => {
                const claimInput = formQueryInput("claimEur");
                if (claimInput) claimInput.value = String(computedTotal || "");
              }}
            >
              {t.useSum}
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.section3}</h2>
        <div className="space-y-1">
          <label className="text-sm font-medium">{t.freeText}</label>
          <textarea
            name="additionalInfo"
            className="w-full min-h-[120px] rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          />
          <div className="text-xs text-gray-500">{t.freeTextHint}</div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.section4}</h2>
        <div className="rounded-2xl border p-4 space-y-4">
          <div className="max-w-[240px]">
            <ControlledSelect
              label={t.travelerCount}
              value={String(travelerCount)}
              onChange={(value) => setTravelerCount(Number(value))}
              options={Array.from({ length: 10 }, (_, i) => [`${i + 1}`, `${i + 1}`])}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: travelerCount }, (_, index) => (
              <div key={index} className="rounded-xl border p-4 space-y-3">
                <div className="text-sm font-medium">
                  {t.travelerLabel} {index + 1}
                </div>
                <Field label={t.travelerFirstName} name={`travelerFirstName_${index + 1}`} required />
                <Field label={t.travelerLastName} name={`travelerLastName_${index + 1}`} required />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.section5}</h2>
        <div className="rounded-2xl border p-4 space-y-2">
          <div className="text-sm text-gray-700">{t.uploadHint}</div>
          <input type="file" name="attachments" multiple className="block w-full text-sm" accept=".pdf,.png,.jpg,.jpeg" />
          <div className="text-xs text-gray-500">{t.uploadLimits}</div>
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

function Select({
  label,
  name,
  required = false,
  options,
  choose,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: Array<[string, string]>;
  choose: string;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">
        {label}
        {required ? " *" : ""}
      </label>
      <select
        name={name}
        required={required}
        className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
        defaultValue=""
      >
        <option value="" disabled>
          {choose}
        </option>
        {options.map(([v, optionLabel]) => (
          <option key={v} value={v}>
            {optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
}

function ControlledSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<[string, string]>;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
      >
        {options.map(([v, optionLabel]) => (
          <option key={v} value={v}>
            {optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
}

function MiniMoney({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type="number"
        placeholder="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}

function formQueryInput(name: string): HTMLInputElement | null {
  return document.querySelector(`input[name="${name}"]`);
}
