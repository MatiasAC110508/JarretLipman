import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/clients",
    "/judging-and-clinician-history",
    "/testimonials",
    "/clinics-vs-coaching",
    "/in-the-news",
    "/academic-publications",
    "/book-a-session",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `https://jarrettlipman.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
