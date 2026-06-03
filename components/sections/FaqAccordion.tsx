"use client";

import { useTranslations } from "next-intl";
import { Accordion } from "@heroui/react";

const items = [
  "privacy",
  "languages",
  "devices",
  "appleHealth",
  "aiAccuracy",
  "subscription",
] as const;

export function FaqAccordion() {
  const t = useTranslations("faq");

  return (
    <div className="soft-card px-2 py-1 sm:px-4">
      <Accordion allowsMultipleExpanded className="faq-accordion">
        {items.map((item) => (
          <Accordion.Item key={item} id={item}>
            <Accordion.Heading>
              <Accordion.Trigger className="w-full py-5 text-left text-base font-semibold">
                {t(`items.${item}.question`)}
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="pb-5 text-sm leading-7 text-muted">
                {t(`items.${item}.answer`)}
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
