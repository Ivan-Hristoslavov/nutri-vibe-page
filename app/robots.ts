import type { MetadataRoute } from "next";

import { getSiteOrigin } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin().origin.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    host: origin,
    sitemap: `${origin}/sitemap.xml`,
  };
}
