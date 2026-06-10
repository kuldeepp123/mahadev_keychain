// app/layout.js
import "./globals.css";
import Theme from "./utils/ThemeProvider";
import { Toaster } from 'react-hot-toast';

const BASE_URL = "https://mahadev-keychain.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mahadev Keychain – Wholesale Keychain Supplier India",
    template: "%s | Mahadev Keychain",
  },
  description:
    "Mahadev Keychain is a wholesale keychain supplier. Custom, promotional, corporate & personalized keychains at wholesale prices. Bulk orders, Pan India shipping.",
  keywords: [
    "Wholesale Keychain Supplier",
    "Bulk Keychain Supplier India",
    "Custom Keychains Wholesale",
    "Promotional Keychains",
    "Corporate Keychains",
    "Acrylic Keychains",
    "Metal Keychains",
    "Photo Keychains",
    "Name Keychains",
    "Anime Keychains",
    "Mahadev Keychain",
  ],
  authors: [{ name: "Mahadev Keychain" }],
  creator: "Mahadev Keychain",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Mahadev Keychain – Wholesale Keychain Supplier",
    description:
      "Factory direct wholesale keychains. Acrylic, metal, photo, name, anime, corporate, promotional & custom keychains. Bulk orders welcome.",
    url: BASE_URL,
    siteName: "Mahadev Keychain",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahadev Keychain Wholesale",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Keychain – Wholesale Keychain Supplier",
    description:
      "Factory direct wholesale keychains. Bulk orders welcome.",
    images: ["/assets/images/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
