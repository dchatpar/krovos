export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[60vh] w-full items-center justify-center"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Outer gold-gradient ring */}
        <div className="relative h-16 w-16">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #D4A017, #F0C040, #B8860B, transparent 70%)",
              animation: "krovos-spin 1.1s linear infinite",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
            }}
          />
          {/* Inner navy core */}
          <div className="absolute inset-3 rounded-full bg-[#0A1628]" />
        </div>

        <p className="text-sm font-medium tracking-[0.25em] text-[#D4A017] uppercase">
          Loading
        </p>
      </div>

      {/* Keyframes for the spinner (scoped via a className so we don't pollute globals) */}
      <style>{`
        @keyframes krovos-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
