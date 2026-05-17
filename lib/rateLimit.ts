type Bucket = {
  count: number;
  resetAt: number;
};

const store = (globalThis as { __rateLimitStore?: Map<string, Bucket> }).__rateLimitStore ??
  new Map<string, Bucket>();

if (!(globalThis as { __rateLimitStore?: Map<string, Bucket> }).__rateLimitStore) {
  (globalThis as { __rateLimitStore?: Map<string, Bucket> }).__rateLimitStore = store;
}

export function rateLimit(args: {
  key: string;
  limit: number;
  windowMs: number;
}) {
  const now = Date.now();
  const bucket = store.get(args.key);

  if (!bucket || bucket.resetAt <= now) {
    store.set(args.key, { count: 1, resetAt: now + args.windowMs });
    return { allowed: true, remaining: args.limit - 1, resetAt: now + args.windowMs };
  }

  if (bucket.count >= args.limit) {
    return { allowed: false, remaining: 0, resetAt: bucket.resetAt };
  }

  bucket.count += 1;
  store.set(args.key, bucket);
  return { allowed: true, remaining: args.limit - bucket.count, resetAt: bucket.resetAt };
}

export function clientIpFromHeaders(headers: Headers) {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return headers.get("x-real-ip") || "unknown";
}
