import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/frontend/components/layout/Navbar";
import { DictionaryProvider } from "@/frontend/components/providers/DictionaryProvider";
import { ThemeProvider } from "@/frontend/components/providers/ThemeProvider";
import {
  getServerLocale,
  getServerDictionary,
} from "@/shared/i18n/server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerDictionary();
  return {
    title: t.meta.siteTitle,
    description: t.meta.siteDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();
  const dictionary = await getServerDictionary();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <DictionaryProvider dictionary={dictionary} locale={locale}>
            <Navbar />
            <div className="pt-14">
              {children}
            </div>
          </DictionaryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
