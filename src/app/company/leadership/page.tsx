import Link from "next/link";

export const metadata = {
  title: "Leadership - Krovos",
  description: "Krovos is a founder-led company based in Surrey, BC.",
};

export default function LeadershipPage() {
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
            <span className="text-[#D4A017]">Leadership</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            We&apos;re a founder-led team. To learn more, contact us at{" "}
            <a
              href="mailto:info@krovos.ca"
              className="text-[#D4A017] hover:underline"
            >
              info@krovos.ca
            </a>
            .
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#0A1628] bg-gradient-to-r from-[#D4A017] to-[#F0C040] rounded-full hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
