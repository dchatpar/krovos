import Link from "next/link";

export const metadata = {
  title: "Careers - Krovos",
  description: "We're a small founder-led team. We're always open to hearing from talented people.",
};

export default function CareersPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0E7C7B]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Join Our <span className="text-[#D4A017]">Team</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            We&apos;re not actively hiring right now, but we love hearing from
            talented people. Email{" "}
            <a
              href="mailto:info@krovos.ca"
              className="text-[#D4A017] hover:underline"
            >
              info@krovos.ca
            </a>{" "}
            with your background.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#0A1628] bg-gradient-to-r from-[#D4A017] to-[#F0C040] rounded-full hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
            >
              Get in Touch
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
