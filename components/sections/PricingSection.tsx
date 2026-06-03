import { VibeBanner } from "@/components/mascot/vibe-banner";
import { Pricing } from "@/components/sections/Pricing";

export function PricingSection() {
  return (
    <>
      <VibeBanner variant="pricing" className="mx-auto max-w-6xl px-4 pb-2 pt-4 sm:px-6" />
      <Pricing />
    </>
  );
}
