"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to the console so we can see what blew up during dev/staging.
    // In production this would be swapped for Sentry/Datadog/etc.
    console.error("Krovos page error boundary caught:", error);
  }, [error]);

  return (
    <div className="relative flex min-h-[70vh] w-full items-center justify-center px-6 py-24">
      {/* Subtle gold radial backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(212,160,23,0.12), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-xl text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.35em] text-[#D4A017] uppercase">
          Unexpected Error
        </p>

        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Something went wrong on our end.
        </h1>

        <p className="mb-8 text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
          We&apos;ve hit an unexpected snag while rendering this page.
          Don&apos;t worry — our team has been notified, and you can try again
          or head back home.
        </p>

        {error.digest && (
          <p className="mb-8 font-mono text-xs text-[#6B7280]">
            Reference: {error.digest}
          </p>
        )}

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#D4A017] to-[#F0C040] px-6 py-3 text-sm font-semibold text-[#0A1628] transition hover:from-[#F0C040] hover:to-[#F0C040] focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:ring-offset-2 focus:ring-offset-[#0A1628]"
          >
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-[#D4A017]/40 px-6 py-3 text-sm font-semibold text-[#D4A017] transition hover:border-[#D4A017] hover:bg-[#D4A017]/10 focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:ring-offset-2 focus:ring-offset-[#0A1628]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
