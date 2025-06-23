import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Figtree, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

const figtreeSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});

const loraSerif = Lora({
  variable: "--font-lora-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tailwind Colors - by Tom Hanson",
  description: "Find the best Tailwind color combinations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ralewaySans.variable} ${figtreeSans.variable} ${loraSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
