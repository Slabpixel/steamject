import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/providers/provider";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const helveticaNeue = localFont({
  src: "./fonts/helveticaneue-medium.woff2",
  variable: "--font-helvetica-neue",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steamject: DNA Injection",
  description: "Steamject is an advanced biotechnology company focused on precision DNA and RNA injection technologies, enabling breakthroughs in genetic engineering and life sciences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${helveticaNeue.variable} h-full antialiased`}
    >
      <Provider>
        <body className="min-h-full flex flex-col max-md:overflow-x-hidden">
          <Navbar />
          {children}</body>
      </Provider>
    </html>
  );
}
