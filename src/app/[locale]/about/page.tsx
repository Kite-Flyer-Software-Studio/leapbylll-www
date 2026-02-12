import { Background } from "@/components/background";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AccountingIntelligence } from "@/components/pages/about/accounting-intelligence";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");

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

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <div className="relative z-10">
        <AccountingIntelligence />
      </div>
    </div>
  );
}
