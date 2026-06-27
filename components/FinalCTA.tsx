import Image from "next/image";

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="bg-brand-surface text-brand-text py-24 md:py-32"
    >
      <div className="container-edge">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-brand-primary">Start Your Next Iteration</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-left text-brand-text">
              Your Next Iteration Shouldn&apos;t Take 6 Weeks.
            </h2>
            <p className="mt-4 max-w-xl text-left text-lg leading-relaxed text-brand-muted">
              Tell us what you&apos;re building. We&apos;ll tell you what&apos;s possible —
              and when we can have it in your hands.
            </p>
            <p className="mt-3 max-w-xl text-left text-base leading-relaxed text-brand-text">
              The intake is NDA-ready, US-based, and built for the gap between first
              prototype and production-intent validation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#book-calendly"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-primary text-white font-semibold text-base hover:bg-brand-primary-hover focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-colors"
              >
                Book a Discovery Call
              </a>
              <a
                href="#upload-files"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-brand-border bg-transparent text-brand-text font-semibold hover:bg-brand-surface-2 transition-colors"
              >
                Upload Project Files
              </a>
            </div>

            <div className="mt-10 border-t border-brand-border pt-8 text-sm leading-relaxed text-brand-muted">
              <p>
                US-based | HP MJF + SLA + FDM + TPU | NDA-ready | Short-run &amp; pilot production | Biocompatible materials available
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-8 w-auto opacity-80">
                  <Image
                    src="/images/logo.jpg"
                    alt="Advanc3D logo"
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  Advanc3D · Product Development
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-bg shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/cta-wearable-calipers.jpg"
                  alt="Wearable device component beside calipers — precision signal"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
