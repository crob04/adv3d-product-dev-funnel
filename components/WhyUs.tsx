import Image from "next/image";

const pillars = [
  {
    n: "01",
    title: "Design Collaboration",
    body: "We review the part, not just the file. DFM issues, tolerance risks, load paths, and material mismatches get flagged before the build starts, so v2 is a better design rather than another print of v1.",
    bullets: [
      "DFM feedback on every upload before the build",
      "Tolerance, wall-thickness, and press-fit review path"
    ]
  },
  {
    n: "02",
    title: "Material Flexibility",
    body: "HP MJF nylon, calibrated-shore TPU, SLA resin, FDM thermoplastics, PA-CF options, and biocompatible grades can be matched to function, surface finish, and test intent. Material choice should follow the load case, patient-contact profile, and end-use assumptions.",
    bullets: [
      "Material matched to function, not to what's loaded",
      "Biocompatible routes for patient-contact applications"
    ]
  },
  {
    n: "03",
    title: "Short-Run Production",
    body: "Move from one prototype to fifty pilot units without a reset. The same review path supports engineering-grade builds, production-grade documentation needs, and ISO 13485-ready habits as the project matures.",
    bullets: [
      "No MOQ, no gated quote process",
      "Same QA workflow whether 5 parts or 500"
    ]
  }
];

const differentiators = [
  "Quote speed: quote in 24 hours after upload, with a human review path for technical files.",
  "Build speed: functional prototypes targeted for 3–7 business days when scope and material are ready.",
  "DFM review: every upload gets design-for-manufacturability feedback before the machine starts.",
  "No MOQ pressure: one prototype, five validation parts, or a short-run batch can fit the same intake.",
  "CAD fluency: CAD file, STL, STEP, and project notes are treated as engineering context, not just attachments.",
  "HP MJF capability: nylon parts for durable functional prototype and pilot production use cases.",
  "TPU capability: calibrated-shore TPU for flexible interfaces, seals, and soft-touch assemblies.",
  "SLA capability: resin detail for fit checks, visual review, and fine-feature validation.",
  "FDM capability: fast thermoplastic iteration when geometry, lead time, and cost point in that direction.",
  "Biocompatible optioning: biocompatible material routes can be considered when patient-contact assumptions matter.",
  "Regulated-development language: FDA awareness, ISO 13485-ready workflow habits, and design controls vocabulary belong in the conversation.",
  "Production continuity: production-intent iteration can continue into pilot production without a new vendor search."
];

const materialImages = [
  { src: "/images/materials-grid-1.jpg", alt: "HP Multi Jet Fusion nylon sample — macro surface texture", code: "HP MJF · PA12" },
  { src: "/images/materials-grid-2.jpg", alt: "TPU soft-interface sample — calibrated shore hardness", code: "TPU · Shore 85A" },
  { src: "/images/materials-grid-3.jpg", alt: "SLA resin detail-validation sample", code: "SLA · Tough Resin" },
  { src: "/images/materials-grid-4.jpg", alt: "Biocompatible material sample for patient-contact applications", code: "Biocompatible · MED610" }
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-brand-surface text-brand-text py-16 md:py-20"
    >
      <div className="container-edge">
        <p className="eyebrow text-brand-primary">Why Us</p>
        <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-left">
          Built for Iteration. Priced for Early Stage. Ready for Production.
        </h2>
        <p className="mt-6 max-w-3xl text-left text-lg leading-relaxed text-brand-muted">
          Advanc3D pairs additive manufacturing capability with practical engineering
          review, so each iteration leaves your team with a better part and fewer
          unknowns.
        </p>

        {/* Staggered pillars: 3 rows, alternating layout (left/right) */}
        <div className="mt-14 flex flex-col gap-14">
          {pillars.map((p, i) => {
            const imageOnLeft = i % 2 === 0;
            const visual = (
              <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-bg shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={`/images/materials-grid-${(i % 4) + 1}.jpg`}
                    alt={p.title + " reference material sample"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                </div>
              </div>
            );
            const text = (
              <div>
                <span className="font-mono text-sm text-brand-muted">
                  {p.n}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-brand-text">
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-brand-muted">
                  {p.body}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-base leading-relaxed text-brand-text">
                      <span className="font-mono text-xs text-brand-muted pt-1 shrink-0">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
            return (
              <div
                key={p.n}
                className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center"
              >
                <div className={`md:col-span-6 ${imageOnLeft ? "md:order-1" : "md:order-2"}`}>
                  {visual}
                </div>
                <div className={`md:col-span-6 ${imageOnLeft ? "md:order-2" : "md:order-1"}`}>
                  {text}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-column materials grid (1:1 squares) — MUST be grid-cols-2 md:grid-cols-4 */}
        <div className="mt-20">
          <p className="eyebrow text-brand-primary">In-House Materials</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-brand-text">
            HP MJF · SLA · FDM · TPU
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {materialImages.map((m) => (
              <div
                key={m.code}
                className="overflow-hidden rounded-xl border border-brand-border bg-brand-bg shadow-sm"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={m.src}
                    alt={m.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 22vw, 45vw"
                  />
                </div>
                <p className="px-3 py-3 font-mono text-xs uppercase tracking-widest text-brand-muted">
                  {m.code}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators list */}
        <div className="mt-16">
          <p className="eyebrow text-brand-primary">
            What Sets the Work Apart
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2 max-w-6xl">
            {differentiators.map((d, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-brand-text"
              >
                <span className="font-mono text-xs text-brand-muted pt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
