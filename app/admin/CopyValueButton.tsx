"use client";

import { useState } from "react";

export default function CopyValueButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="rounded border px-2 py-0.5 text-xs hover:bg-gray-50"
      title="Copy value"
      aria-label="Copy value"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
