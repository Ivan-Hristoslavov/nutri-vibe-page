import { getTranslations } from "next-intl/server";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { VibeBubble } from "@/components/mascot/vibe-bubble";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { MASCOT } from "@/lib/mascot";

export async function Faq() {
  const t = await getTranslations("faq");
  const vibe = await getTranslations("vibe");

  return (
    <section id="faq" className="section scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
        <p className="mt-3 text-lg text-muted">{t("subtitle")}</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start">
        <ScrollReveal className="faq-mascot flex justify-center lg:sticky lg:top-28 lg:justify-center">
          <VibeBubble
            src={MASCOT.thinking}
            message={vibe("faq")}
            size="lg"
            placement="top"
            float
          />
        </ScrollReveal>
        <ScrollReveal>
          <FaqAccordion />
        </ScrollReveal>
      </div>
    </section>
  );
}
