// app/layout.js
import "./globals.css";
import Theme from "./utils/ThemeProvider";
import { Toaster } from 'react-hot-toast';
export const metadata = {
  title: "Mahadev Keychain – Wholesale Keychain Supplier India",
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
  openGraph: {
    title: "Mahadev Keychain – Wholesale Keychain Supplier",
    description:
      "Factory direct wholesale keychains. Acrylic, metal, photo, name, anime, corporate, promotional & custom keychains. Bulk orders welcome.",
    url: "https://www.mahadevkeychain.com",
    siteName: "Mahadev Keychain",
    images: [
      {
        url: "https://www.mahadevkeychain.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mahadev Keychain Wholesale",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="Mahadev Keychain" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={metadata.openGraph.title}
        />
        <meta
          name="twitter:description"
          content={metadata.openGraph.description}
        />
        <meta
          name="twitter:image"
          content={metadata.openGraph.images[0].url}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Toaster />
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
