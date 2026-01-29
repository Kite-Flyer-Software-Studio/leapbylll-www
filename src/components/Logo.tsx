"use client";
import { Link } from "@/i18n/navigation";
import React from "react";
import Image from "next/image";

export const Logo = () => {
  // const handleLogoClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <Link
      href="/"
      // onClick={handleLogoClick}
      className="font-normal flex items-center text-sm mr-4 px-2 py-1 relative z-20"
    >
      <Image
        src="/logos/leapbylll-logo.png"
        alt="LEAP by LLL"
        width={120}
        height={40}
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
};
