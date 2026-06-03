import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { navAnchors } from "@/lib/constants";
import { VibeBubble } from "@/components/mascot/vibe-bubble";
import { MASCOT } from "@/lib/mascot";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";

export async function Footer() {
  const t = await getTranslations("footer");
  const vibe = await getTranslations("vibe");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-surface-secondary">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2" aria-label="NutriVibe">
            <Image
              src={MASCOT.idle}
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="text-lg font-bold tracking-tight">NutriVibe</span>
          </Link>
          <p className="max-w-xs text-sm text-muted">{t("tagline")}</p>
          <div className="footer-mascot pt-3">
            <VibeBubble
              src={MASCOT.sleeping}
              message={vibe("footer")}
              size="md"
              placement="top"
              float
            />
          </div>
        </div>

        <nav className="space-y-3" aria-label={t("productHeading")}>
          <p className="text-sm font-semibold text-foreground">{t("productHeading")}</p>
          <ul className="space-y-2 text-sm text-muted">
            {navAnchors.map((item) => (
              <li key={item.id}>
                <a className="transition hover:text-foreground" href={`#${item.id}`}>
                  {t(`links.${item.labelKey}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="space-y-3" aria-label={t("legalHeading")}>
          <p className="text-sm font-semibold text-foreground">{t("legalHeading")}</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link className="transition hover:text-foreground" href="/privacy">
                {t("links.privacy")}
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-foreground" href="/terms">
                {t("links.terms")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">{t("languageHeading")}</p>
          <LanguageSwitcher align="start" />
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-muted sm:px-6">
          &copy; {year} NutriVibe. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
