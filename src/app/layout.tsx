import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Austin EV Charger Installation | Licensed Electricians | AustinEV",
    template: "%s | AustinEV - Austin EV Charger Installation",
  },
  description:
    "Professional EV charger installation in Austin, TX. Licensed electricians, $800-$2,500 typical cost. Level 1, Level 2 & DC fast chargers. Free quotes. Austin Energy rebate assistance.",
  keywords: [
    "EV charger installation Austin",
    "electric vehicle charger Austin TX",
    "Level 2 charger installation Austin",
    "home EV charging Austin",
    "Austin electrician EV charger",
    "Tesla charger installation Austin",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AustinEV",
    title: "Austin EV Charger Installation | Licensed Electricians",
    description:
      "Professional EV charger installation in Austin, TX. Licensed electricians, $800-$2,500 typical cost. Free quotes & Austin Energy rebate assistance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
