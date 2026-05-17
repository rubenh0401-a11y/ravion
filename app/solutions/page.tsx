import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solutions for Airlines",
  description:
    "Ravion helps airlines resolve passenger compensation disputes before legal escalation.",
  robots: {
    index: false,
    follow: false,
  },
};

const processSteps = [
  "Passengers first submit their claim through Ravion.",
  "Ravion evaluates the case using historical outcomes, legal patterns, and claim-specific factors.",
  "Based on this assessment, Ravion proposes a fair settlement amount to the passenger.",
  "If the passenger accepts, the settlement proposal is forwarded to the airline for review.",
  "The airline can accept, reject, negotiate further, or continue with its standard claims handling process.",
];

const benefitSections = [
  {
    title: "Lower Overall Claims Costs",
    paragraphs: [
      "By resolving cases before legal escalation, airlines can significantly reduce legal fees, court costs, processing overhead, and external claims management expenses.",
    ],
  },
  {
    title: "Greater Strategic Flexibility",
    paragraphs: [
      "Ravion does not replace an airline's existing claims process.",
      "Instead, it creates an additional option that airlines can use selectively and strategically. Airlines remain free to reject proposals or continue cases through their existing procedures whenever appropriate.",
    ],
  },
  {
    title: "Faster Resolution Cycles",
    paragraphs: [
      "Traditional compensation disputes can take months - sometimes years.",
      "Ravion is designed to create outcomes within days. This reduces operational friction and improves internal efficiency.",
    ],
  },
  {
    title: "Improved Passenger Satisfaction",
    paragraphs: [
      "Passengers primarily escalate claims when they feel ignored or forced into lengthy disputes.",
      "A fast, transparent, and cooperative resolution process improves the customer experience and increases the likelihood of long-term customer retention.",
    ],
  },
  {
    title: "Reduced Exposure to Claims Companies",
    paragraphs: [
      "The rapid growth of claims enforcement companies across Europe has fundamentally changed passenger behavior.",
      "Today, passengers can pursue claims with virtually no financial risk. As a result, rejected claims increasingly continue through legal channels rather than disappearing.",
      "Ravion provides airlines with a proactive alternative before these external escalation mechanisms are triggered.",
    ],
  },
];

const faqs = [
  {
    question: "When does Ravion charge a service fee?",
    answer:
      "Ravion does not charge airlines for assessing cases, creating settlement proposals, or forwarding proposals for review. A service fee is charged only if a settlement is accepted and concluded.",
  },
  {
    question: "Are Ravion settlement proposals binding for the airline?",
    answer:
      "No. Ravion does not issue binding decisions. The airline can review each proposal and decide whether to accept it, reject it, negotiate further, or continue through its existing claims process.",
  },
  {
    question: "How does Ravion fit into an existing claims operation?",
    answer:
      "Ravion is designed as an additional pre-litigation resolution stage, not as a replacement for internal claims handling. It can be used selectively for cases where early settlement may be commercially and operationally preferable.",
  },
  {
    question: "What happens after a passenger accepts a proposed settlement?",
    answer:
      "The accepted proposal is forwarded to the airline for review. The airline still makes the final decision and can evaluate the proposal against its legal position, operational context, and commercial considerations.",
  },
  {
    question: "Does Ravion act on behalf of passengers like a claims company?",
    answer:
      "Ravion is not a traditional claims enforcement company and does not seek to escalate disputes into litigation. Its role is to create an earlier, structured resolution opportunity between passenger and airline.",
  },
  {
    question: "What is the Ravion service fee?",
    answer:
      "The Ravion service fee is 10% of the concluded settlement amount. A minimum fee of EUR 39 applies.",
  },
  {
    question: "What operational benefit does Ravion provide beyond the settlement amount?",
    answer:
      "Early resolution can reduce follow-up correspondence, legal coordination, court-related administration, and the internal workload associated with long-running disputed claims.",
  },
  {
    question: "Why would passengers use Ravion instead of a claims company?",
    answer:
      "Passengers may prefer a faster and more transparent process that can produce an earlier settlement proposal without immediately moving into a legal enforcement route.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="px-4 pb-14 pt-7 sm:px-6 sm:pb-16 sm:pt-9 lg:pb-20 lg:pt-10">
      <div className="app-wrap">
        <section
          className="overflow-hidden rounded-[28px] border"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(140deg, color-mix(in oklab, var(--surface-strong) 94%, #f4f8fb) 0%, color-mix(in oklab, var(--surface) 94%, #e3edf4) 100%)",
          }}
        >
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:p-10 xl:gap-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <Image src="/ravion-logo.png" alt="Ravion" width={120} height={82} className="h-9 w-auto" priority />
                <span className="pill">Airline solutions</span>
              </div>

              <h1 className="mt-7 max-w-lg text-3xl font-semibold tracking-tight sm:text-5xl lg:text-[50px] lg:leading-[1.05]">
                Reduce Passenger Compensation Costs
              </h1>
              <p className="mt-4 max-w-xl text-xl font-medium leading-snug sm:text-2xl" style={{ color: "var(--brand-strong)" }}>
                While improving customer relationships.
              </p>
              <p className="mt-5 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                Ravion helps airlines resolve passenger compensation disputes before they escalate into
                claim management companies, legal intermediaries, or courts.
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  "Independent pre-litigation resolution layer",
                  "Airlines remain fully in control",
                  "No service fee unless a settlement is concluded",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: "var(--brand-strong)" }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Built for airlines that want to reduce compensation-related expenses while offering
                  passengers a faster, more transparent resolution path.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">Platform overview</p>
                <p className="hidden text-sm sm:block" style={{ color: "var(--muted)" }}>
                  2-minute demo
                </p>
              </div>
              <div
                className="overflow-hidden rounded-[22px] border shadow-sm"
                style={{ borderColor: "var(--border)", background: "#111827" }}
              >
                <video
                  className="aspect-video h-full w-full bg-[#f5f8fc] object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/ravion-logo.png"
                >
                  <source src="/solutions-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <ContentSection eyebrow="The problem" title="Passenger compensation has become a major cost driver.">
          <p>
            Passenger compensation has become one of the most underestimated cost drivers within European
            aviation. Across Europe, airlines pay hundreds of millions of euros every year due to flight
            disruptions, cancellations, and delay-related claims.
          </p>
          <p>However, the compensation itself is often only part of the actual financial burden.</p>
          <p>
            In many cases, rejected or unanswered claims escalate through claim management companies, legal
            intermediaries, and ultimately courts. Once this happens, airlines are no longer only paying the
            original compensation amount - they are also exposed to additional legal expenses, court fees,
            administrative workload, and increased operational complexity.
          </p>
          <p>
            At the same time, passengers who feel ignored or unfairly treated are more likely to lose trust
            in the airline, publicly criticize the brand, or avoid future bookings altogether.
          </p>
        </ContentSection>

        <ContentSection eyebrow="What Ravion is" title="An independent pre-litigation resolution platform.">
          <p>
            Ravion acts as an independent, technology-driven pre-litigation resolution platform for
            passenger compensation disputes.
          </p>
          <p>
            In practical terms, Ravion functions similarly to an out-of-court settlement and mediation
            layer between passengers and airlines.
          </p>
          <p>
            Instead of disputes immediately escalating toward legal enforcement, courts, or claim management
            companies, Ravion creates an additional resolution stage where cases can potentially be settled
            earlier, faster, and at significantly lower cost.
          </p>
          <p>
            Importantly, airlines remain fully in control throughout the process. Ravion does not issue
            binding decisions and does not obligate airlines to accept settlement proposals.
          </p>
          <p>
            Every proposed settlement can be reviewed, accepted, rejected, or negotiated further by the
            airline. This gives airlines additional flexibility and creates another strategic option before
            disputes escalate into expensive legal proceedings.
          </p>
        </ContentSection>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                A smarter approach
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                A structured off-ramp before the claim escalates further.
              </h2>
            </div>
            <div className="grid gap-3">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-xl border p-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "color-mix(in oklab, var(--surface) 92%, #f4f8fb)",
                  }}
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold"
                    style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mt-8 rounded-[28px] border p-6 sm:p-10"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(145deg, color-mix(in oklab, var(--surface-strong) 95%, #eef4f8) 0%, color-mix(in oklab, var(--surface) 96%, #f7fafc) 100%)",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                Example
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                From court probability to a settlement proposal.
              </h2>
              <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                Based on its assessment, Ravion proposes a fair settlement amount to the passenger.
              </p>
            </div>
            <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
              <div className="grid gap-3 sm:grid-cols-3">
                <Metric label="Claimed compensation amount" value="EUR 600" />
                <Metric label="Estimated court success probability" value="80%" />
                <Metric label="Proposed settlement" value="EUR 480" />
              </div>
              <p className="mt-5 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                If the passenger accepts the proposal, the settlement is forwarded to the airline for
                review. The airline can then decide whether to accept the proposal, reject it, or continue
                with its standard claims handling process.
              </p>
            </div>
          </div>
        </section>

        <ContentSection eyebrow="Financial impact" title="Why this matters financially">
          <p>
            Under the current system, legal escalation often creates costs that significantly exceed the
            compensation itself.
          </p>
          <p>
            In Germany, for example, a typical compensation dispute involving a EUR 600 claim may
            additionally generate court fees, claimant legal representation costs, legal representation
            costs for the airline, administrative handling expenses, and operational processing overhead.
          </p>
          <p>As a result, the total financial exposure can exceed EUR 1,300 for a single case.</p>
        </ContentSection>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <CostCard
            title="Traditional escalation"
            amount="EUR 1,300+"
            text="Possible total exposure for a EUR 600 compensation dispute once court fees, legal representation, administrative workload, and operational overhead are included."
          />
          <CostCard
            highlighted
            title="With Ravion"
            amount="~EUR 530"
            text="EUR 480 settlement payment plus a 10% Ravion service fee of EUR 48. This can reduce total case-related expenses by more than 50%."
          />
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
            Benefits for airlines
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            A more efficient alternative before external escalation mechanisms are triggered.
          </h2>
          <div className="mt-7 grid gap-5">
            {benefitSections.map((section) => (
              <article
                key={section.title}
                className="rounded-xl border p-5"
                style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}
              >
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <div className="mt-3 space-y-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContentSection eyebrow="Designed for modern aviation" title="Faster, more predictable, less adversarial.">
          <p>Ravion is not a law firm and not a traditional claims company.</p>
          <p>
            We are building a technology-driven resolution layer between passengers and airlines: faster,
            more predictable, less adversarial, and significantly more cost-efficient.
          </p>
          <p>
            Our goal is simple: help airlines reduce compensation-related expenses while improving the
            passenger experience.
          </p>
        </ContentSection>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
            Frequently asked questions
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Practical questions from airlines
          </h2>
          <div className="mt-6 grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border p-4"
                style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}
              >
                <summary className="cursor-pointer text-base font-semibold">{faq.question}</summary>
                <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="mt-8 rounded-[28px] border p-6 text-center sm:p-10"
          style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
            Ravion
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Efficient resolution before escalation.
          </h2>
        </section>
      </div>
    </main>
  );
}

function ContentSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="surface-card mt-8 p-6 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        </div>
        <div className="space-y-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
          {children}
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border px-4 py-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.12em]" style={{ color: "var(--muted)" }}>
        {label}
      </div>
    </div>
  );
}

function CostCard({
  title,
  amount,
  text,
  highlighted = false,
}: {
  title: string;
  amount: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <article
      className="rounded-[20px] border p-6"
      style={{
        borderColor: highlighted ? "var(--brand)" : "var(--border)",
        background: highlighted ? "color-mix(in oklab, var(--surface-strong) 90%, #e7f1f6)" : "var(--surface-strong)",
      }}
    >
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-3 text-4xl font-semibold">{amount}</p>
      <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
        {text}
      </p>
    </article>
  );
}
