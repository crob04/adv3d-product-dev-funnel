import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-surface-2 border-t border-brand-border py-12">
      <div className="container-edge flex flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Advanc3D logo"
            width={120}
            height={32}
            className="h-8 w-auto opacity-80"
          />
          <span className="font-display text-base font-bold text-brand-text">
            Advanc3D
          </span>
        </div>
        <p className="max-w-2xl text-xs uppercase tracking-widest text-brand-muted">
          US-based | HP MJF + SLA + FDM + TPU | NDA-ready | Short-run &amp; pilot production | Biocompatible materials available
        </p>
        <p className="font-mono text-xs text-brand-muted">
          &copy; {new Date().getFullYear()} Advanc3D
        </p>
      </div>
    </footer>
  );
}
