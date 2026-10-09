import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Lumière High-Fashion Lookbook & Storefront",
  description: "A curated luxury digital lookbook, asymmetric editorial catalogue, and wishlist experience featuring architectural silhouettes and monochrome collections.",
  openGraph: {
    title: "Lumière High-Fashion Lookbook & Storefront",
    description: "A curated luxury digital lookbook, asymmetric editorial catalogue, and wishlist experience featuring architectural silhouettes and monochrome collections.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f9f9f9] text-[#1b1b1b] antialiased selection:bg-black selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
