import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Upload files or a design brief",
    body: "STL, STEP, or a plain description of what the part needs to do. We meet teams where their design actually is.",
    image: "/images/process-1.jpg"
  },
  {
    n: "02",
    title: "Review and response within 24 hours",
    body: "DFM feedback, material recommendation, lead time, and quote. No black-box pricing.",
    image: null as string | null
  },
  {
    n: "03",
    title: "Approval and build",
    body: "Production runs in 3–7 business days depending on process and volume. Progress updates provided, not silence.",
    image: "/images/process-2.jpg"
  },
  {
    n: "04",
    title: "Parts arrive ready for testing",
    body: "Post-processed, finished, and documented. Ready for bench testing, clinical validation, or investor demonstration.",
    image: "/images/process-3.jpg"
  }
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-brand-bg text-brand-text py-16 md:py-20"
    >
      <div className="container-edge">
        <p className="eyebrow text-brand-primary">How It Works</p>
        <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-left">
          Four Steps From Concept to Production-Intent Part
        </h2>
        <p className="mt-6 max-w-3xl text-left text-lg leading-relaxed text-brand-muted">
          A simple path from upload to reviewed quote, build, post-processing, and
          next-iteration planning.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-xl border border-brand-border bg-brand-surface p-6 shadow-sm"
            >
              {step.image ? (
                <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-bg">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 40vw, 90vw"
                    />
                  </div>
                </div>
              ) : null}
              <div className={step.image ? "mt-5" : ""}>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  Step {step.n}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-brand-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-brand-muted">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
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
      </div>
    </section>
  );
}
