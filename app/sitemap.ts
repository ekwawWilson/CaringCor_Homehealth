import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/about`, priority: 0.8 },
    { url: `${BASE_URL}/services`, priority: 0.9 },
    { url: `${BASE_URL}/services/personal-care`, priority: 0.8 },
    { url: `${BASE_URL}/services/homemaker`, priority: 0.8 },
    { url: `${BASE_URL}/services/ihss`, priority: 0.8 },
    { url: `${BASE_URL}/services/irss`, priority: 0.8 },
    { url: `${BASE_URL}/services/community-connector`, priority: 0.7 },
    { url: `${BASE_URL}/services/community-connections`, priority: 0.7 },
    { url: `${BASE_URL}/services/mentorship`, priority: 0.7 },
    { url: `${BASE_URL}/services/skilled-nursing`, priority: 0.8 },
    { url: `${BASE_URL}/contact`, priority: 0.8 },
    { url: `${BASE_URL}/careers`, priority: 0.7 },
    { url: `${BASE_URL}/resources`, priority: 0.6 },
  ];

  return routes.map((r) => ({ url: r.url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: r.priority }));
}
