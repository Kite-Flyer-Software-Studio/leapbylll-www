"use client";
import React from "react";
import Balancer from "react-wrap-balancer";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/button";
import { useTranslations } from "next-intl";

export const CTA = () => {
  const t = useTranslations("cta");

  return (
    <section className="py-60 w-full  overflow-hidden relative z-30">
      <div className="bg-white dark:bg-black">
        <div className="mx-auto w-full relative z-20 sm:max-w-[40rem]  md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-[#2b5d46] dark:from-neutral-900 to-[#4e8d6f] sm:rounded-2xl">
          <div className="relative -mx-6   sm:mx-0 sm:rounded-2xl overflow-hidden px-6  md:px-8 ">
            <div
              className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"
              style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "30%",
              }}
            ></div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
              style={{
                mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
              }}
            ></div>

            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              <h2 className="  text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-[#abdf86]">
                {t("heading")}
              </h2>
              <p className="mt-4 max-w-[26rem] text-center mx-auto  text-base/6 text-[#abdf86]/90">
                <Balancer>
                  {t("subheading")}
                </Balancer>
              </p>

              <div className="relative z-10 mx-auto flex justify-center mt-6">
                <Button as={Link} href="/get-quote">{t("button")}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
