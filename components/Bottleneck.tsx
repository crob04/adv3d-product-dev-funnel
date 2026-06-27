import Image from "next/image";

const frictionPoints = [
  "Your CAD file passes the upload form, but nobody flags the thin wall, press-fit risk, or tolerance accumulation before the build.",
  "You need one prototype or a 5-part validation run, but the quote path assumes a larger buy than your test plan requires.",
  "The first part arrives fast, then fails under bench testing because DFM and design-for-manufacturability feedback came too late.",
  "Your IP needs an NDA-ready intake before upload, not a vague form followed by a callback."
];

export default function Bottleneck() {
  return (
    <section
      id="bottleneck"
      className="bg-brand-bg text-brand-text py-20 md:py-24"
    >
      <div className="container-edge">
        <p className="eyebrow text-brand-primary">The Bottleneck</p>
        <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-left">
          Most Volume Vendors Are Built for Scale. Your Prototype Isn&apos;t.
        </h2>
        <p className="mt-6 max-w-3xl text-left text-lg leading-relaxed text-brand-text">
          Early device development needs fast feedback, controlled risk, and human review
          before a file becomes a failed part.
        </p>
        <p className="mt-4 max-w-3xl text-left text-base leading-relaxed text-brand-muted">
          Founders lose weeks when a prototype is treated like a finished drawing package.
          The real bottleneck is not printing the part; it is finding tolerance risks,
          material mismatches, design controls gaps, and load-case problems early enough
          to fix them.
        </p>

        <ul className="mt-10 flex flex-col gap-4 max-w-3xl">
          {frictionPoints.map((point, i) => (
            <li
              key={i}
              className="flex gap-4 text-base leading-relaxed text-brand-text"
            >
              <span className="font-mono text-xs text-brand-muted tracking-widest pt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* 1:1 split visual — clean CAD render vs warped print */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-surface shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/problem-cad.jpg"
                alt="Clean CAD render on screen — what gets submitted to manufacturing"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
            <p className="px-4 py-3 font-mono text-xs uppercase tracking-widest text-brand-muted">
              What You Submitted
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-surface shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/problem-warp.jpg"
                alt="Warped or failed 3D print on build plate — what happens without DFM"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
            <p className="px-4 py-3 font-mono text-xs uppercase tracking-widest text-brand-muted">
              What Happens Without DFM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
