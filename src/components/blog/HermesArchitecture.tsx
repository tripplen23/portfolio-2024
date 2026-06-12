import type { ReactNode } from "react";

// A theme-aware, responsive architecture diagram that matches the portfolio's
// minimal mono aesthetic (site tokens: dark/light + primary/primaryDark).
// Used inside MDX as <HermesArchitecture />.

function Node({
  title,
  subtitle,
  accent = "default",
}: {
  title: string;
  subtitle?: string;
  accent?: "default" | "pink" | "teal";
}) {
  const ring =
    accent === "pink"
      ? "border-primary/70"
      : accent === "teal"
        ? "border-primaryDark/70"
        : "border-dark/30 dark:border-light/30";

  return (
    <div
      className={`flex w-full max-w-xs flex-col items-center rounded-xl border ${ring} bg-light px-4 py-3 text-center dark:bg-dark`}
    >
      <span className="text-sm font-semibold text-dark dark:text-light">
        {title}
      </span>
      {subtitle && (
        <span className="mt-1 text-xs text-dark/55 dark:text-light/55">
          {subtitle}
        </span>
      )}
    </div>
  );
}

function Connector({
  label,
  direction = "down",
}: {
  label?: string;
  direction?: "down" | "updown";
}) {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden="true">
      <span className="text-base leading-none text-dark/40 dark:text-light/40">
        {direction === "updown" ? "↕" : "↓"}
      </span>
      {label && (
        <span className="mt-0.5 text-[0.7rem] uppercase tracking-wide text-dark/45 dark:text-light/45">
          {label}
        </span>
      )}
    </div>
  );
}

function Lane({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center gap-1 rounded-2xl border border-dashed border-primaryDark/40 bg-primaryDark/[0.03] px-4 py-5">
      {children}
    </div>
  );
}

export default function HermesArchitecture() {
  return (
    <figure className="not-prose my-8 w-full">
      <div className="mx-auto flex max-w-md flex-col items-center gap-1">
        <Node title="You" subtitle="Discord / WhatsApp · from anywhere" accent="pink" />
        <Connector label="Tailscale VPN" />

        <Lane>
          <span className="mb-2 text-[0.7rem] font-semibold uppercase tracking-widest text-primaryDark">
            My always-on laptop
          </span>
          <Node
            title="Hermes Agent"
            subtitle="Node.js · LLM · skills · cron"
            accent="teal"
          />
          <Connector label="chat bridge" direction="updown" />
          <Node title="Discord Bot" subtitle="messaging · DM only" />
          <Connector label="git clone" />
          <Node title="Portfolio Repo" subtitle="Next.js · TypeScript · pnpm" />
        </Lane>

        <Connector label="push PR" />
        <Node title="GitHub" subtitle="tripplen23 · PRs · CI" />
        <Connector label="deploy" />
        <Node title="Vercel" subtitle="edge · CDN · live site" accent="pink" />
      </div>
      <figcaption className="mt-4 text-center text-xs italic text-dark/50 dark:text-light/50">
        I text Hermes from anywhere; it edits the repo on my laptop and ships to
        production.
      </figcaption>
    </figure>
  );
}
