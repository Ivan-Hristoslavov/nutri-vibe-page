import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import "../globals.css";
import { Providers } from "@/app/providers";
import { ThemeScript } from "@/components/theme/theme-script";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollToTopButton } from "@/components/site/scroll-to-top-button";
import { type Locale, locales } from "@/i18n/routing";
import { VercelInsights } from "@/components/analytics/vercel-insights";
import { buildSiteMetadata } from "@/lib/seo";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

type LayoutParams = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return buildSiteMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    ogAlt: t("ogAlt"),
    keywords: t("keywords"),
  });
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode } & LayoutParams>) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="bg-background text-foreground flex min-h-full flex-col font-sans">
        <NextIntlClientProvider>
          <Providers>
            <Header />
            <main id="top" className="page-canvas relative z-[1] flex-1 scroll-mt-0">
              {children}
            </main>
            <ScrollToTopButton />
            <Footer />
          </Providers>
        </NextIntlClientProvider>
        <VercelInsights />
      </body>
    </html>
  );
}
