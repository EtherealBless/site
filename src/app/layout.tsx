import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";

import "./globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });
const ebGaramond = EB_Garamond({ subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"] });

export const metadata: Metadata = {
  title: "My blog",
  description: "Personal blog created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.className} mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8`}>
        <Header/>
        {children}</body>
    </html>
  );
}
