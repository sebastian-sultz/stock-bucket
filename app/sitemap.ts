import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stockbucketresearchfirm.co";

  const routes = [
    "",
    "/about",
    "/contact",
    "/pricing",
    "/rpm",
    "/services",
    "/services/equity",
    "/services/futures",
    "/services/options",
    "/services/commodity",
    "/insights",
    "/insights/understanding-intraday-volatility",
    "/insights/option-mantra-range-bound-markets",
    "/insights/gold-vs-crude-oil-mcx-dynamics",
    "/payment",
    "/disclaimer",
    "/disclosure",
    "/dos-and-donts",
    "/grievance",
    "/investor-charter",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.includes("/services") || route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.7,
  }));
}
