"use client";

import { useMemo, useState } from "react";

type InteractiveStep = {
  title: string;
  duration: string;
  outcome: string;
  tasks: readonly string[];
};

type InteractiveLabels = {
  step: string;
  tasks: string;
  duration: string;
  outcome: string;
  next: string;
};

export default function InteractiveFlow({
  steps,
  labels,
}: {
  steps: readonly InteractiveStep[];
  labels: InteractiveLabels;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const progress = useMemo(() => ((activeIndex + 1) / steps.length) * 100, [activeIndex, steps.length]);

  return (
    <div className="rounded-2xl border p-4 sm:p-5" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
      <div className="grid gap-2 sm:grid-cols-3">
        {steps.map((step, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="rounded-xl border px-3 py-3 text-left transition-colors"
              style={{
                borderColor: isActive ? "var(--brand-strong)" : "var(--border)",
                background: isActive ? "color-mix(in oklab, var(--surface-strong) 92%, #deebf5)" : "var(--surface)",
              }}
              aria-pressed={isActive}
            >
              <div className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
                {labels.step} {idx + 1}
              </div>
              <div className="mt-1 text-sm font-semibold">{step.title}</div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full" style={{ background: "color-mix(in oklab, var(--surface) 85%, #dbe3ea)" }}>
        <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: "var(--brand-strong)" }} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <h3 className="text-sm font-semibold">{labels.tasks}</h3>
          <div className="mt-3 grid gap-2">
            {activeStep.tasks.map((task) => (
              <div key={task} className="flex items-start gap-2 text-sm">
                <span aria-hidden="true" className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-strong)" }} />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--muted)" }}>
            {labels.duration}
          </div>
          <p className="mt-1 text-sm font-semibold">{activeStep.duration}</p>
          <div className="mt-4 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--muted)" }}>
            {labels.outcome}
          </div>
          <p className="mt-1 text-sm">{activeStep.outcome}</p>

          {activeIndex < steps.length - 1 ? (
            <button
              type="button"
              onClick={() => setActiveIndex((i) => Math.min(i + 1, steps.length - 1))}
              className="mt-5 rounded-full px-4 py-2 text-xs font-semibold text-white"
              style={{ background: "var(--brand-strong)" }}
            >
              {labels.next}
            </button>
          ) : null}
        </article>
      </div>
    </div>
  );
}
