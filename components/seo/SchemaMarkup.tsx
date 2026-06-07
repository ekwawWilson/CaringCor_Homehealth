import { SITE_NAME, BASE_URL, PHONE, EMAIL, ADDRESS } from "@/lib/siteConfig";

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BASE_URL,
    name: SITE_NAME,
    url: BASE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "10800 E Bethany Drive",
      addressLocality: "Aurora",
      addressRegion: "CO",
      postalCode: "80014",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: "39.6851", longitude: "-104.7718" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    ],
    areaServed: [
      { "@type": "City", name: "Aurora, Colorado" },
      { "@type": "City", name: "Denver, Colorado" },
      { "@type": "AdministrativeArea", name: "Jefferson County, Colorado" },
      { "@type": "AdministrativeArea", name: "Douglas County, Colorado" },
    ],
    description: "CaringCor Home Health Care provides skilled and non-skilled home health care services in Aurora, Denver and surrounding Colorado communities.",
    serviceType: ["Personal Care", "Homemaker Services", "IHSS", "IRSS", "Skilled Nursing", "Community Support", "Mentorship"],
    priceRange: "$$",
    sameAs: [],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
