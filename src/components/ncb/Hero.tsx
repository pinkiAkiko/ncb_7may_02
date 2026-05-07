import { ShieldAlert, Phone, ArrowRight, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const updates = [
  "Sample Advisory: Report drug-related information through MANAS Helpline 1933",
  "Sample Notice: Recruitment information available under Join NCB",
  "Sample Tender: Technology services tender published",
  "Sample Press Release: Awareness campaign conducted across zones",
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative bg-navy-deep text-navy-foreground overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/10"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-saffron mb-5">
            <span className="h-px w-8 bg-saffron" /> Official Government Website
          </p>
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Narcotics Control Bureau
          </h1>
          <p className="mt-3 text-base md:text-lg text-navy-foreground/80">
            Ministry of Home Affairs, Government of India
          </p>
          <p className="mt-6 text-sm md:text-base text-navy-foreground/85 max-w-xl leading-relaxed">
            India&apos;s apex coordinating and enforcement agency for combating illicit drug
            trafficking and substance abuse — through intelligence, enforcement and inter-agency
            coordination.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="bg-saffron text-saffron-foreground hover:bg-saffron/90 font-semibold rounded-none h-11 px-6">
              <ShieldAlert className="size-4" /> Submit a Tip
            </Button>
            <Button
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-none h-11 px-6"
              asChild
            >
              <a href="tel:1933">
                <Phone className="size-4" /> Call MANAS 1933
              </a>
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white rounded-none h-11 px-4"
            >
              Learn About NCB <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative bg-strip border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron shrink-0">
            <Megaphone className="size-4" aria-hidden /> Latest Updates
          </span>
          <div className="flex-1 overflow-hidden relative">
            <div className="ticker-track flex gap-10 whitespace-nowrap text-sm text-navy-foreground/90">
              {[...updates, ...updates].map((u, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span className="size-1 bg-saffron" /> {u}
                </span>
              ))}
            </div>
          </div>
          <a href="#" className="text-xs font-semibold text-saffron hover:underline shrink-0">
            View All →
          </a>
        </div>
      </div>
    </section>
  );
}
