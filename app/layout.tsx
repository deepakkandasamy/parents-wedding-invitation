import type { Metadata } from "next";
import { Cormorant_Garamond, Parisienne, Bodoni_Moda } from "next/font/google";
import "./global.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: "Ashwarya & Deepak | Wedding Invitation",
  description: "Join us as we celebrate our wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${bodoni.variable}`}>
      <body>{children}</body>
    </html>
  );
}

