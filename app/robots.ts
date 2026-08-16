import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://stockbucketresearchfirm.co";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/",
        "/api/",
        "/rpm?*",
        "/risk-profile?*",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
