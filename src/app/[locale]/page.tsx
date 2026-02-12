import { Container } from "@/components/container";
import { Hero } from "@/components/pages/home/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/pages/home/features";
import { CTA } from "@/components/pages/home/cta";
import { HowWeSupport } from "@/components/pages/home/how-we-support";
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
          <Features />
          <HowWeSupport />
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
