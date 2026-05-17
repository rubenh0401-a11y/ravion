export const CASE_TOKEN_HEADER = "x-case-token";

export function createCaseAccessToken() {
  return crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");
}

export function readCaseAccessToken(req: Request) {
  const token = req.headers.get(CASE_TOKEN_HEADER);
  if (!token) return null;
  const trimmed = token.trim();
  return trimmed.length > 0 ? trimmed : null;
}
