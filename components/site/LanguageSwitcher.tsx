"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { type Locale, localeLabels, locales } from "@/i18n/routing";

export function LanguageSwitcher({ align = "end" }: { align?: "start" | "end" }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function selectLocale(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label={t("language")}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={isPending}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-3 text-sm font-medium text-foreground transition hover:bg-surface-secondary"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
        <span className="uppercase">{locale}</span>
      </button>
      {open ? (
        <ul
          role="listbox"
          className={`glass absolute top-12 z-50 min-w-44 overflow-hidden rounded-2xl border border-border p-1 shadow-xl ${
            align === "end" ? "right-0" : "left-0"
          }`}
        >
          {locales.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={option === locale}
                onClick={() => selectLocale(option)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition hover:bg-surface-secondary ${
                  option === locale ? "font-semibold text-accent" : "text-foreground"
                }`}
              >
                <span>{localeLabels[option]}</span>
                <span className="text-xs uppercase text-muted">{option}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
