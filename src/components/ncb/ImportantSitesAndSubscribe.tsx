import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Building2, Phone, BookOpen, Smartphone, Globe, Database, Users2,
  HeartPulse, Landmark, Scale,
} from "lucide-react";

const sites = [
  { name: "MANAS", icon: Phone },
  { name: "NIDAAN", icon: BookOpen },
  { name: "NCORD", icon: Users2 },
  { name: "UMANG", icon: Smartphone },
  { name: "MyGov", icon: Landmark },
  { name: "India.gov.in", icon: Globe },
  { name: "Data.gov.in", icon: Database },
  { name: "UNODC", icon: Scale },
  { name: "MoSJE", icon: Building2 },
  { name: "Drug Rehab Centres", icon: HeartPulse },
];

export function ImportantSitesAndSubscribe() {
  return (
    <section aria-labelledby="sites-title" className="bg-soft-gray py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[2fr_1fr] gap-8 lg:items-start">
        <div className="flex flex-col">
          <h2 id="sites-title" className="text-3xl md:text-4xl font-bold text-navy">
            Important Websites
          </h2>
          <div className="mt-2 h-1 w-12 bg-saffron" aria-hidden />
          <p className="text-sm text-muted-foreground mt-3">
            Related government portals and partner organisations.
          </p>
          <ul className="mt-5 hairline-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-card">
            {sites.map(({ name, icon: Icon }) => (
              <li key={name} className="hover:bg-navy transition-colors group">
                <a
                  href="#"
                  className="w-full h-24 flex flex-col items-center justify-center gap-1 px-2 text-center"
                >
                  <Icon className="size-4 text-navy group-hover:text-saffron" aria-hidden strokeWidth={1.5} />
                  <span className="min-h-[2.4em] flex items-center justify-center text-[13px] font-semibold leading-tight text-navy group-hover:text-navy-foreground line-clamp-2">
                    {name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="bg-navy text-navy-foreground p-5 flex flex-col">
          <h2 className="text-base md:text-lg font-bold">Subscribe to Updates</h2>
          <div className="mt-2 h-1 w-10 bg-saffron" aria-hidden />
          <p className="text-sm text-navy-foreground/80 mt-2">
            Advisories, press releases & notices — straight to your inbox.
          </p>

          <form className="mt-4 space-y-2.5" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">Email address</label>
            <Input
              id="email"
              type="email"
              required
              placeholder="Email address"
              className="bg-white text-foreground rounded-none h-10"
            />
            <div className="flex items-start gap-2">
              <Checkbox id="consent" className="mt-0.5 border-white data-[state=checked]:bg-saffron data-[state=checked]:text-saffron-foreground rounded-none" />
              <label htmlFor="consent" className="text-xs text-navy-foreground/85 leading-snug">
                I agree to the <a href="#" className="underline font-semibold">Privacy Policy</a>.
              </label>
            </div>
            <Button type="submit" className="w-full bg-saffron text-saffron-foreground hover:bg-saffron/90 font-semibold rounded-none h-10">
              Subscribe
            </Button>
          </form>

          <p className="mt-3 text-[11px] text-navy-foreground/60">
            Unsubscribe anytime.
          </p>
        </aside>
      </div>
    </section>
  );
}
