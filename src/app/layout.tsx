import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sagawa Kyohei - Portfolio",
  description: "技術に情熱を持つソフトウェア開発者のポートフォリオサイト。モダンなWebアプリケーションの構築に取り組んでいます。",
  keywords: ["フロントエンド開発", "React", "Next.js", "TypeScript", "Web開発", "UI/UX"],
  authors: [{ name: "Sagawa Kyohei" }],
  creator: "Sagawa Kyohei",
  publisher: "Sagawa Kyohei",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://your-domain.vercel.app",
    title: "Sagawa Kyohei - Portfolio",
    description: "技術に情熱を持つソフトウェア開発者のポートフォリオサイト",
    siteName: "Sagawa Kyohei Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sagawa Kyouhei Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagawa Kyohei - Portfolio",
    description: "技術に情熱を持つソフトウェア開発者のポートフォリオサイト",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
