import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { brandAssets } from "@/lib/data/brand";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.d-wind.de"),
  title: {
    default: "D-Wind GmbH | Fundamentbau für Windenergieanlagen",
    template: "%s | D-Wind GmbH",
  },
  description:
    "D-Wind GmbH ist spezialisiert auf Arbeiten im Fundamentbau für Windenergieanlagen. Bewehrung, Schalung und Betonierarbeiten für Windenergieprojekte in Europa.",
  icons: {
    icon: [{ url: brandAssets.logo, type: "image/png" }],
    shortcut: brandAssets.logo,
    apple: [{ url: brandAssets.logo, type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_GB"],
    siteName: "D-Wind GmbH",
    images: [
      {
        url: brandAssets.shareImage,
        width: 1774,
        height: 887,
        alt: "D-Wind GmbH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [brandAssets.shareImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${ibmPlexSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background-dark font-sans text-text-light">
        {children}
      </body>
    </html>
  );
}
