import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

type LegalPageProps = {
  namespace: "privacy" | "terms";
  sectionKeys: string[];
};

export async function LegalPage({ namespace, sectionKeys }: LegalPageProps) {
  const t = await getTranslations(namespace);
  const tLegal = await getTranslations("legal");

  return (
    <article className="section max-w-3xl">
      <Link
        href="/"
        className="text-sm font-medium text-accent transition hover:opacity-80"
      >
        &larr; {tLegal("backHome")}
      </Link>
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">{t("title")}</h1>
      <p className="mt-2 text-sm text-muted">
        {tLegal("lastUpdated")}: {t("updated")}
      </p>
      <p className="mt-6 text-lg leading-8 text-muted">{t("intro")}</p>

      <div className="mt-10 space-y-8">
        {sectionKeys.map((key) => (
          <section key={key}>
            <h2 className="text-xl font-bold">{t(`sections.${key}.title`)}</h2>
            <p className="mt-2 text-base leading-8 text-muted">
              {t(`sections.${key}.body`)}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
