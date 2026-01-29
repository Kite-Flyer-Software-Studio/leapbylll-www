import { Container } from "@/components/container";
import { Hero } from "@/components/pages/home/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/pages/home/features";
// import { GridFeatures } from "@/components/pages/home/grid-features";
// import { Testimonials } from "@/components/pages/home/testimonials";
import { CTA } from "@/components/pages/home/cta";
import { NavBar } from "@/components/layout/navbar";
import { WhoWeServe } from "@/components/pages/home/who-we-serve";
import { HowItWorks } from "@/components/pages/home/how-it-works";
import { ServicesPricing } from "@/components/pages/home/services-pricing";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden ">
          <Background />
        </div>
        <Container className="flex min-h-screen flex-col items-center justify-between ">
          <Hero />
          <WhoWeServe />
          <Features />
          <HowItWorks />
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
