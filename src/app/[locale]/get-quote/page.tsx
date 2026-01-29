import { Metadata } from "next";
import { Background } from "@/components/background";
import QuoteFormSection from "@/components/pages/get-quote/QuoteFormSection";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("getQuote");

  return {
    title: `${t("title")} - LEAP by LLL`,
    description: t("description"),
    openGraph: {
      title: `${t("title")} - LEAP by LLL`,
      description: t("description"),
      type: "website",
    },
  };
}

export default function GetQuotePage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <div className="relative z-10">
        <QuoteFormSection />
      </div>
    </div>
  );
}
