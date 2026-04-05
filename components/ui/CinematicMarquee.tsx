"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const CinematicMarquee = ({
  text,
  speed = 20, // seconds for full loop
}: {
  text: string;
  speed?: number;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;

    gsap.to(trackRef.current, {
      xPercent: -50,
      ease: "none",
      duration: speed,
      repeat: -1,
    });
  }, { scope: trackRef });

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap bg-transparent py-4 text-neutral-800/20 select-none flex items-center border-y border-neutral-800/10 mix-blend-overlay">
      <div
        ref={trackRef}
        className="inline-flex font-sans font-bold text-[8vw] uppercase leading-none tracking-tighter"
      >
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
      </div>
    </div>
  );
};
