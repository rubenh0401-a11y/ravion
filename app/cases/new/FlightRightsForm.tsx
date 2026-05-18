"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Relation = "B2C";
type Lang = "de" | "en";

const copy = {
  de: {
    netErr: "Netzwerkfehler",
    unknownErr: "Unbekannter Fehler",
    section1: "1) Flug & Ereignis",
    airline: "Airline",
    bookingCode: "Buchungscode",
    flightNo: "Flugnummer",
    flightHint: "Bei mehreren Flügen bitte den betroffenen Flug angeben, wenn bekannt.",
    from: "Start (IATA)",
    to: "Ziel (IATA)",
    date: "Datum",
    what: "Was ist passiert?",
    arrived: "Ich bin gar nicht am Zielort angekommen",
    delay: "Verspätung bei Ankunft (Stunden)",
    reason: "Was hat die Airline als Grund genannt?",
    contacted: "Hast du die Airline bereits kontaktiert?",
    yes: "Ja",
    no: "Nein",
    contactRef: "Referenznummer / Vorgangsnummer (optional)",
    correspondence: "Korrespondenz mit Airline (optional)",
    correspondenceHint: "Optional: Antwortmail, Chatverlauf oder Schreiben der Airline hochladen.",
    section2: "2) Antragssteller & Forderung",
    applicantFirstName: "Vorname der antragstellenden Person",
    applicantLastName: "Nachname der antragstellenden Person",
    claim: "Gewünschter Betrag (gesamt, EUR)",
    email: "Kontakt-E-Mail",
    optionalBreakdown: "Optional: Wie setzt sich der Betrag zusammen?",
    compensation: "Entschädigung",
    meals: "Verpflegung",
    hotel: "Hotel / Fahrkosten",
    refund: "Ticket-Rückerstattung",
    replacement: "Ersatzticket",
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
    uploadHint: "Du kannst Dateien hochladen (z. B. Buchungsbestätigung, Umbuchung, Belege).",
    uploadLimits: "Optional - max. 8 Dateien, je Datei max. 10 MB, erlaubt: PDF/PNG/JPG.",
    chooseFiles: "Dateien auswählen",
    noFiles: "Keine Datei ausgewählt",
    filesSelected: "Dateien ausgewählt",
    agree: "Ich bestätige, dass die Angaben korrekt sind. Einschätzung unverbindlich, keine Rechtsberatung.",
    submit: "Fall einreichen ->",
    sending: "Sende...",
    eventOptions: [
      ["delay", "Verspätung"],
      ["cancellation", "Annullierung"],
      ["denied_boarding", "Nichtbeförderung (Overbooking)"],
      ["missed_connection", "Anschluss verpasst"],
      ["baggage", "Gepäck"],
      ["downgrade", "Downgrade"],
      ["other", "Sonstiges"],
    ] as Array<[string, string]>,
    choose: "Bitte auswählen",
  },
  en: {
    netErr: "Network error",
    unknownErr: "Unknown error",
    section1: "1) Flight & event",
    airline: "Airline",
    bookingCode: "Booking code",
    flightNo: "Flight number",
    flightHint: "If there were multiple flights, enter the affected flight if known.",
    from: "From (IATA)",
    to: "To (IATA)",
    date: "Date",
    what: "What happened?",
    arrived: "I did not arrive at the destination",
    delay: "Arrival delay (hours)",
    reason: "What reason did the airline provide?",
    contacted: "Have you already contacted the airline?",
    yes: "Yes",
    no: "No",
    contactRef: "Reference / case number (optional)",
    correspondence: "Airline correspondence (optional)",
    correspondenceHint: "Optional: upload reply mail, chat transcript, or airline letter.",
    section2: "2) Applicant & claim",
    applicantFirstName: "Applicant first name",
    applicantLastName: "Applicant last name",
    claim: "Requested amount (total, EUR)",
    email: "Contact email",
    optionalBreakdown: "Optional: amount breakdown",
    compensation: "Compensation",
    meals: "Meals",
    hotel: "Hotel / transport",
    refund: "Ticket refund",
    replacement: "Replacement ticket",
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
    uploadHint: "Upload documents (e.g. booking confirmation, rebooking, receipts).",
    uploadLimits: "Optional - max 8 files, max 10 MB each, allowed: PDF/PNG/JPG.",
    chooseFiles: "Choose files",
    noFiles: "No file selected",
    filesSelected: "files selected",
    agree: "I confirm the information is correct. Assessment is non-binding and not legal advice.",
    submit: "Submit case ->",
    sending: "Sending...",
    eventOptions: [
      ["delay", "Delay"],
      ["cancellation", "Cancellation"],
      ["denied_boarding", "Denied boarding (overbooking)"],
      ["missed_connection", "Missed connection"],
      ["baggage", "Baggage"],
      ["downgrade", "Downgrade"],
      ["other", "Other"],
    ] as Array<[string, string]>,
    choose: "Please select",
  },
} as const;

export default function FlightRightsForm({
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

  const [comp, setComp] = useState({
    compensation: "",
    meals: "",
    hotelTransport: "",
    refund: "",
    replacementTicket: "",
  });

  const computedTotal = useMemo(() => {
    const nums = [
      comp.compensation,
      comp.meals,
      comp.hotelTransport,
      comp.refund,
      comp.replacementTicket,
    ].map((v) => Number(String(v).replace(",", ".")) || 0);
    return nums.reduce((a, b) => a + b, 0);
  }, [comp]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const files = form.getAll("attachments") as File[];
    const correspondenceFiles = form.getAll("correspondence") as File[];
    const arrived = form.get("arrived") === "yes";
    const uploadFiles = [...files, ...correspondenceFiles].filter((f) => f && f.size > 0);
    const travelers = Array.from({ length: travelerCount }, (_, index) => ({
      first_name: String(form.get(`travelerFirstName_${index + 1}`) || ""),
      last_name: String(form.get(`travelerLastName_${index + 1}`) || ""),
    }));

    const payload = {
      relation_type: relation,
      category: "flight_rights",
      claim_eur: Number(form.get("claimEur") || 0) || null,
      contact_email: String(form.get("email") || ""),
      facts: {
        airline: String(form.get("airline") || ""),
        booking_code: String(form.get("bookingCode") || ""),
        flightNumber: String(form.get("flightNumber") || ""),
        from: String(form.get("from") || ""),
        to: String(form.get("to") || ""),
        date: String(form.get("date") || ""),
        eventType: String(form.get("eventType") || ""),
        arrived,
        delayHours: arrived ? String(form.get("delayHours") || "") : "",
        airlineReason: String(form.get("airlineReason") || ""),
        applicant_first_name: String(form.get("applicantFirstName") || ""),
        applicant_last_name: String(form.get("applicantLastName") || ""),
        contacted_airline: contactedCompany === "yes",
        airline_contact_reference: String(form.get("airlineContactReference") || ""),
        traveler_count: travelerCount,
        travelers,
        additionalInfo: String(form.get("additionalInfo") || ""),
        breakdown: {
          compensation: Number(form.get("comp_compensation") || 0) || null,
          meals: Number(form.get("comp_meals") || 0) || null,
          hotel_transport: Number(form.get("comp_hotelTransport") || 0) || null,
          refund: Number(form.get("comp_refund") || 0) || null,
          replacement_ticket: Number(form.get("comp_replacementTicket") || 0) || null,
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
            label={t.airline}
            name="airline"
            placeholder={lang === "en" ? "e.g. Lufthansa" : "z. B. Lufthansa"}
            required
          />
          <Field
            label={t.bookingCode}
            name="bookingCode"
            placeholder={lang === "en" ? "e.g. ABC123" : "z. B. ABC123"}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">{t.flightNo} *</label>
          <input
            name="flightNumber"
            required
            placeholder={lang === "en" ? "e.g. LH123" : "z. B. LH123"}
            className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          />
          <div className="text-xs text-gray-500">{t.flightHint}</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Field label={t.from} name="from" placeholder={lang === "en" ? "e.g. ZRH" : "z. B. ZRH"} required />
          <Field label={t.to} name="to" placeholder={lang === "en" ? "e.g. BER" : "z. B. BER"} required />
          <Field label={t.date} name="date" type="date" required />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Select label={t.what} name="eventType" required options={t.eventOptions} choose={t.choose} />
          <label className="flex items-center gap-3 rounded-xl border px-3 py-2 text-sm text-gray-600">
            <input type="checkbox" name="arrived" value="yes" className="h-4 w-4" />
            <span>{t.arrived}</span>
          </label>
        </div>

        <Field label={t.delay} name="delayHours" type="number" placeholder={lang === "en" ? "e.g. 4" : "z. B. 4"} />
        <Field
          label={t.reason}
          name="airlineReason"
          placeholder={lang === "en" ? "e.g. technical defect / weather" : "z. B. technischer Defekt / Wetter"}
        />

        <div className="space-y-1">
          <label className="text-sm font-medium">{t.contacted}</label>
          <select
            name="contactedAirline"
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
              name="airlineContactReference"
              placeholder={lang === "en" ? "e.g. ABC-12345" : "z. B. ABC-12345"}
            />
            <div className="space-y-1">
              <label className="text-sm font-medium">{t.correspondence}</label>
              <FilePicker
                name="correspondence"
                multiple
                accept=".pdf,.png,.jpg,.jpeg"
                chooseLabel={t.chooseFiles}
                emptyLabel={t.noFiles}
                selectedLabel={t.filesSelected}
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
            placeholder={lang === "en" ? "e.g. 600" : "z. B. 600"}
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
            <MiniMoney label={t.compensation} name="comp_compensation" value={comp.compensation} onChange={(v) => setComp((s) => ({ ...s, compensation: v }))} />
            <MiniMoney label={t.meals} name="comp_meals" value={comp.meals} onChange={(v) => setComp((s) => ({ ...s, meals: v }))} />
            <MiniMoney label={t.hotel} name="comp_hotelTransport" value={comp.hotelTransport} onChange={(v) => setComp((s) => ({ ...s, hotelTransport: v }))} />
            <MiniMoney label={t.refund} name="comp_refund" value={comp.refund} onChange={(v) => setComp((s) => ({ ...s, refund: v }))} />
            <MiniMoney label={t.replacement} name="comp_replacementTicket" value={comp.replacementTicket} onChange={(v) => setComp((s) => ({ ...s, replacementTicket: v }))} />
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
          <FilePicker
            name="attachments"
            multiple
            accept=".pdf,.png,.jpg,.jpeg"
            chooseLabel={t.chooseFiles}
            emptyLabel={t.noFiles}
            selectedLabel={t.filesSelected}
          />
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

function formQueryInput(name: string): HTMLInputElement | null {
  return document.querySelector(`input[name="${name}"]`);
}
