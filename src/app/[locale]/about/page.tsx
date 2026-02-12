import { Background } from "@/components/background";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { AboutIntro } from "@/components/pages/about/about-intro";
import { AccountingIntelligence } from "@/components/pages/about/accounting-intelligence";
import { AboutFAQs } from "@/components/pages/about/about-faqs";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aboutIntro");

  return {
    title: `About - LEAP by LLL`,
    description: t("description.part1"),
    openGraph: {
      title: `About - LEAP by LLL`,
      description: t("description.part1"),
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
      <Container className="flex min-h-screen flex-col items-center justify-between relative z-10">
        <AboutIntro />
        <AccountingIntelligence />
        <AboutFAQs />
      </Container>
      <div className="absolute inset-0 h-full w-full overflow-hidden ">
        <Background />
      </div>
    </div>
  );
}
