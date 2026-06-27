import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-bg text-brand-text py-24 md:py-32"
    >
      <div className="container-edge">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow text-brand-primary">
              Product Development &amp; Prototyping
            </p>
            <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-left text-brand-text">
              From CAD File to Functional Prototype — Without the 6-Week Wait.
            </h1>
            <p className="mt-6 max-w-xl text-left text-lg leading-relaxed text-brand-muted">
              Advanc3D is the additive manufacturing partner for medical device teams that
              need design iteration at the speed of a startup — supporting DFM, short-run
              production, and material selection from first concept to production-intent part.
            </p>
            <p className="mt-4 max-w-xl text-left text-base leading-relaxed text-brand-text">
              On-prem digital fabrication gives your team a direct path from CAD file to
              functional prototype without sacrificing clinical fit or manufacturing precision.
              Advanc3D reviews the part, not just the upload, so DFM, tolerances, material
              selection, post-processing, and delamination risk are addressed before the first
              build — so the next prototype can become a production-intent part without
              restarting the relationship at pilot production.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-primary text-white font-semibold text-base hover:bg-brand-primary-hover focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-colors"
              >
                Book a Discovery Call
              </a>
              <a
                href="#upload"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-brand-border bg-transparent text-brand-text font-semibold hover:bg-brand-surface-2 transition-colors"
              >
                Upload Your Project Files → Get a Quote in 24 Hours
              </a>
            </div>
            <p className="mt-4 text-sm text-brand-muted">
              NDA-ready. US-based. HP MJF, SLA, FDM, and TPU in-house.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-surface shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hero.jpg"
                  alt="Functional additive-manufactured prototype on engineer's desk with CAD screen"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
