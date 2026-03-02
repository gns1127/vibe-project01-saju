import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { SajuGuide } from "@/components/marketing/SajuGuide";
import { FAQ } from "@/components/marketing/FAQ";
import { CTA } from "@/components/marketing/cta";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <SajuGuide />
      <FAQ />
      <CTA />
    </>
  );
}
