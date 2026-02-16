"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover"
      />
      {/* Default overlay - always visible */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="w-full">
          <div className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-medium text-white">
              {card.title}
            </div>
            {card.linkedIn && (
              <a
                href={card.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            )}
          </div>
          {card.subtitle && (
            <div className="text-sm md:text-base text-neutral-200 mt-1">
              {card.subtitle}
            </div>
          )}
        </div>
      </div>
      {/* Hover overlay - shows description */}
      {card.description && (
        <div
          className={cn(
            "absolute inset-0 bg-black/80 flex items-center justify-center p-6 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="w-full h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="text-sm md:text-base text-neutral-200 text-center flex items-center justify-center min-h-full">
              {card.description}
            </div>
          </div>
        </div>
      )}
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  subtitle?: string;
  linkedIn?: string;
  description?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
