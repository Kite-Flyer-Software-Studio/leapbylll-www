import { Container } from "@/components/container";
import { Hero } from "@/components/pages/home/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/pages/home/features";
import { CTA } from "@/components/pages/home/cta";
// import { WhoWeServe } from "@/components/pages/home/who-we-serve";
import { AccountingIntelligence } from "@/components/pages/home/accounting-intelligence";
import { ServicesPricing } from "@/components/pages/home/services-pricing";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden ">
          <Background />
        </div>
        <Container className="flex min-h-screen flex-col items-center justify-between ">
          <Hero />
          {/* <WhoWeServe /> */}
          <Features />
          <AccountingIntelligence />
          <ServicesPricing />
        </Container>
        <div className="relative">
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <Background />
          </div>
          <div id="pricing">
            <CTA />
          </div>
        </div>
      </div>
    </>
  );
}
