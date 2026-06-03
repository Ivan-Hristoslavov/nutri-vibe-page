"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { APP_STORE_URL, navAnchors } from "@/lib/constants";
import { MASCOT } from "@/lib/mascot";
import { scrollToTop } from "@/lib/scroll-to-top";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { useHeaderScrolled } from "@/hooks/use-header-scrolled";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useHeaderScrolled();
  const isHome = pathname === "/";

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isHome) return;
    event.preventDefault();
    setOpen(false);
    scrollToTop();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/40">
      <div className="glass-nav" data-scrolled={scrolled ? "true" : undefined}>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="NutriVibe"
            onClick={handleLogoClick}
          >
            <Image
              src={MASCOT.idle}
              alt=""
              width={48}
              height={48}
              className="logo-mascot h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold tracking-tight">NutriVibe</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navAnchors.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-brand hidden px-5 py-2.5 sm:inline-flex"
            >
              {t("download")}
            </a>
            <button
              type="button"
              aria-label={open ? t("closeMenu") : t("openMenu")}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                {open ? (
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-border/50 glass-nav lg:hidden">
            <div className="mx-auto w-full max-w-6xl space-y-3 px-4 py-4 sm:px-6">
              <nav className="grid gap-1" aria-label="Mobile">
                {navAnchors.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-surface-secondary"
                  >
                    {t(item.labelKey)}
                  </a>
                ))}
              </nav>
              <div className="flex items-center justify-between gap-3 pt-1">
                <LanguageSwitcher align="start" />
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-brand flex-1 justify-center"
                >
                  {t("download")}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
