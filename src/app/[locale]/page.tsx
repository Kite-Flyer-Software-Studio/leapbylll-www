import { Container } from "@/components/container";
import { Hero } from "@/components/pages/home/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/pages/home/features";
import { CTA } from "@/components/pages/home/cta";
import { CTAWhatsapp } from "@/components/pages/home/cta-whatsapp";
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
          <div className="mt-10 relative w-full">
            <div className="relative w-full rounded-[32px] overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                src="https://tbguskbayvt1d7md.public.blob.vercel-storage.com/Mr.%20Luk%20Discussion%20.MP4"
              />
            </div>
          </div>
          <CTAWhatsapp />
          <ServicesPricing />
        </Container>
        <div className="relative">
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <Background />
          </div>
          <div>
            <CTA />
          </div>
        </div>
      </div>
    </>
  );
}
