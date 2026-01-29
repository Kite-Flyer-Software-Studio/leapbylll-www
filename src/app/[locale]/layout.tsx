import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer/footer";
import ContactButtons from "@/components/elements/ContactButtons";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Leap by LLL - Everything AI",
  description:
    "Everything AI seamlessly integrated all the modern AI generation tools into one platform so that you can generate content with a single click.",
  openGraph: {
    images: ["/banner.png"],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <ViewTransitions>
      <html lang={locale} suppressHydrationWarning>
        <body
          className={cn(
            GeistSans.className,
            "bg-white dark:bg-black antialiased h-full w-full"
          )}
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              enableSystem
              disableTransitionOnChange
              defaultTheme="light"
            >
              <main>
                <NavBar />
                {children}
                <Footer />
                <ContactButtons />
              </main>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
