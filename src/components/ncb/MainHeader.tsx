import { Menu, Search, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import ncbEmblem from "@/assets/ncb-emblem.png";
import manasLogo from "@/assets/manas-logo.png";
import indiaEmblem from "@/assets/india-emblem.png";

const navItems = [
  "Home",
  "About",
  "Media, News & Events",
  "Join NCB",
  "Contact Us",
  "Legal",
  "Awareness & Alerts",
  "Services",
  "Resources",
];

export function MainHeader() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-40 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <img src={ncbEmblem} alt="Narcotics Control Bureau emblem" className="h-14 w-auto shrink-0" />
        <div className="min-w-0 flex-1">
          <h1 className="text-base sm:text-lg font-bold text-navy leading-tight truncate">
            Narcotics Control Bureau
          </h1>
          <p className="text-[11px] sm:text-xs text-muted-foreground leading-tight truncate">
            Ministry of Home Affairs, Government of India
          </p>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden />
            <Input
              type="search"
              placeholder="Search NCB…"
              aria-label="Search the NCB website"
              className="pl-8 h-9 w-52 rounded-none"
            />
          </div>
          <Button className="bg-saffron text-saffron-foreground hover:bg-saffron/90 font-semibold rounded-none">
            <ShieldAlert className="size-4" aria-hidden />
            Submit Tip
          </Button>
          <img src={indiaEmblem} alt="State Emblem of India" className="h-16 w-auto shrink-0" />
          <img src={manasLogo} alt="MANAS National Narcotics Helpline" className="h-10 w-auto shrink-0" />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden rounded-none" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Primary" className="mt-4">
              <ul className="space-y-1">
                {navItems.map((n) => (
                  <li key={n}>
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-muted text-sm font-medium text-foreground"
                    >
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4 bg-saffron text-saffron-foreground hover:bg-saffron/90 rounded-none">
                <ShieldAlert className="size-4" /> Submit Tip
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <nav aria-label="Primary" className="hidden md:block bg-navy text-navy-foreground">
        <ul className="mx-auto max-w-7xl px-4 flex flex-wrap">
          {navItems.map((n, i) => (
            <li key={n}>
              <a
                href="#"
                aria-current={i === 0 ? "page" : undefined}
                className={`inline-block px-5 py-4 text-[15px] font-medium hover:bg-navy-deep border-b-[3px] ${
                  i === 0 ? "border-saffron" : "border-transparent"
                }`}
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
