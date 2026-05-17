import { Resend } from "resend";

const FROM = process.env.RESEND_FROM || "Schlichtung <onboarding@resend.dev>";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

function mustHave(value: string | undefined, name: string) {
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

/**
 * Helper: Link to the user's case status page
 */
export function caseLink(caseId: string, accessToken?: string | null) {
  if (!accessToken) {
    return `${APP_URL}/cases/confirm?id=${caseId}`;
  }
  return `${APP_URL}/cases/confirm?id=${caseId}&t=${encodeURIComponent(accessToken)}`;
}

/**
 * Helper: generic email sender (so other files can reuse it)
 */
export async function sendEmail(args: {
  to: string;
  subject: string;
  html: string;
}) {
  const resend = new Resend(mustHave(process.env.RESEND_API_KEY, "RESEND_API_KEY"));

  return resend.emails.send({
    from: FROM,
    to: args.to,
    subject: args.subject,
    html: args.html,
  });
}

/**
 * 1) Email: case received confirmation
 */
export async function sendCaseReceivedEmail(args: {
  to: string;
  caseId: string;
  accessToken?: string | null;
}) {
  const shortId = args.caseId.slice(0, 8);
  const url = caseLink(args.caseId, args.accessToken);

  return sendEmail({
    to: args.to,
    subject: `Bestätigung: Fall ${shortId} ist eingegangen`,
    html: `
      <p>Wir haben deinen Fall erhalten.</p>
      <p><b>Case-ID:</b> ${shortId}</p>
      <p>Du kannst deinen Status hier ansehen:</p>
      <p><a href="${url}">${url}</a></p>
    `,
  });
}

/**
 * 2) Email: review completed + result
 */
export async function sendReviewCompletedEmail(args: {
  to: string;
  caseId: string;
  accessToken?: string | null;
  winProbability: number | null;
  offerEur: number | null;
  claimEur: number | null;
}) {
  const shortId = args.caseId.slice(0, 8);
  const url = caseLink(args.caseId, args.accessToken);

  return sendEmail({
    to: args.to,
    subject: `Update zu deinem Fall ${shortId}: Prüfung abgeschlossen`,
    html: `
      <p>Wir haben deinen Fall geprüft und eine Einschätzung erstellt.</p>
      <p><b>Erfolgswahrscheinlichkeit:</b> ${args.winProbability ?? "—"}%</p>
      <p><b>Deine Forderung:</b> ${args.claimEur ?? "—"} €</p>
      <p><b>Vergleichsvorschlag:</b> ${args.offerEur ?? "—"} €</p>
      <p>Details:</p>
      <p><a href="${url}">${url}</a></p>
    `,
  });
}

/**
 * 3) Email: offer has been sent to the counterparty
 */
export async function sendOfferSentEmail(args: {
  to: string;
  caseId: string;
  accessToken?: string | null;
  offerEur: number | null;
}) {
  const shortId = args.caseId.slice(0, 8);
  const url = caseLink(args.caseId, args.accessToken);

  return sendEmail({
    to: args.to,
    subject: `Update zu deinem Fall ${shortId}: Angebot gesendet`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <p>Wir haben den Vergleichsvorschlag an die Gegenseite gesendet.</p>
        <p><b>Angebot:</b> ${args.offerEur ?? "—"} €</p>
        <p>Status ansehen:</p>
        <p><a href="${url}">${url}</a></p>
        <hr/>
        <p style="font-size: 12px; color: #666;">
          Hinweis: Diese Information ist unverbindlich und stellt keine Rechtsberatung dar.
        </p>
      </div>
    `,
  });
}

/**
 * 4) Email: resend all case links for an email address
 */
export async function sendCaseLinksEmail(args: {
  to: string;
  items: Array<{
    caseId: string;
    accessToken?: string | null;
    createdAt?: string | null;
    status?: string | null;
  }>;
}) {
  const list = args.items
    .map((item) => {
      const url = caseLink(item.caseId, item.accessToken ?? null);
      const created = item.createdAt ? new Date(item.createdAt).toLocaleString() : "-";
      const status = item.status ?? "-";
      return `<li><a href="${url}">${item.caseId.slice(0, 8)}</a> - Status: ${status} - erstellt: ${created}</li>`;
    })
    .join("");

  return sendEmail({
    to: args.to,
    subject: "Deine Fall-Links",
    html: `
      <p>Hier sind die Links zu deinen Faellen:</p>
      <ul>${list}</ul>
      <p>Wenn du diese Anfrage nicht gestellt hast, ignoriere diese Nachricht.</p>
    `,
  });
}


