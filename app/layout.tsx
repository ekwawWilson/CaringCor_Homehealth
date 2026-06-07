import type { Metadata } from "next";
import "./globals.css";
import { BASE_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/siteConfig";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} | Home Health Care in Aurora, Denver CO`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "CaringCor Home Health Care provides skilled and non-skilled home health care services in Aurora, Denver, Jefferson, Douglas and surrounding Colorado communities. Personal care, skilled nursing, IHSS & more.",
  keywords: [
    "home health care Aurora CO", "home health care Denver CO", "skilled nursing home care Colorado",
    "personal care services Aurora", "IHSS Colorado", "elderly care Denver",
    "home health aide Aurora Colorado", "in-home care services Colorado",
    "disability care Colorado", "CaringCor Home Health Care",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "en_US", url: BASE_URL, siteName: SITE_NAME,
    title: `${SITE_NAME} | Home Health Care in Aurora, Denver CO`,
    description: `${SITE_TAGLINE} — Skilled and non-skilled home health care for elderly and families in Aurora, Denver, Jefferson & Douglas counties, CO.`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${SITE_NAME} — Home Health Care in Colorado` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Home Health Care in Aurora, Denver CO`,
    description: `${SITE_TAGLINE} — Home health care services in Aurora, Denver CO.`,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <SchemaMarkup />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
