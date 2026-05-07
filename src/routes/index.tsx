import { createFileRoute } from "@tanstack/react-router";
import { UtilityStrip } from "@/components/ncb/UtilityStrip";
import { MainHeader } from "@/components/ncb/MainHeader";
import { Hero } from "@/components/ncb/Hero";
import { AboutAndMVM } from "@/components/ncb/AboutAndMVM";
import { DirectorMessage } from "@/components/ncb/DirectorMessage";
import { UpdatesAndEvents } from "@/components/ncb/UpdatesAndEvents";
import { CitizenServices } from "@/components/ncb/CitizenServices";
import { EnforcementAndWanted } from "@/components/ncb/EnforcementAndWanted";
import { MediaAndSocial } from "@/components/ncb/MediaAndSocial";
import { ImportantSitesAndSubscribe } from "@/components/ncb/ImportantSitesAndSubscribe";
import { SiteFooter } from "@/components/ncb/SiteFooter";
import { Reveal } from "@/components/ncb/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Narcotics Control Bureau | Ministry of Home Affairs, Government of India" },
      {
        name: "description",
        content:
          "Official website of the Narcotics Control Bureau (NCB), India's apex coordinating agency for drug law enforcement under the Ministry of Home Affairs.",
      },
      { property: "og:title", content: "Narcotics Control Bureau, Government of India" },
      {
        property: "og:description",
        content:
          "India's apex coordinating and enforcement agency for combating illicit drug trafficking and substance abuse.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <UtilityStrip />
      <MainHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <Reveal><AboutAndMVM /></Reveal>
        <Reveal><DirectorMessage /></Reveal>
        <Reveal><UpdatesAndEvents /></Reveal>
        <Reveal><CitizenServices /></Reveal>
        <Reveal><EnforcementAndWanted /></Reveal>
        <Reveal><MediaAndSocial /></Reveal>
        <Reveal><ImportantSitesAndSubscribe /></Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
