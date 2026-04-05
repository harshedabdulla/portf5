"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const LoadingScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        setIsLoaded(true);
      },
    });

    // Animate counter from 0 to 100
    const counterObj = { val: 0 };
    tl.to(
      counterObj,
      {
        val: 100,
        duration: 2,
        ease: "power1.inOut",
        onUpdate: function () {
          if (counterRef.current) {
            const formatted = Math.floor(counterObj.val).toString().padStart(3, "0");
            counterRef.current.innerHTML = formatted;
          }
        },
      }
    )
      // Fade out the counter text
      .to([counterRef.current, textRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      })
      // Brutal slide up to reveal
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });
  }, { scope: containerRef });

  if (isLoaded) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white"
    >
      <div
        ref={counterRef}
        className="font-mono text-[120px] md:text-[200px] lg:text-[250px] font-bold leading-none tracking-tighter"
      >
        000
      </div>
      <div 
        ref={textRef}
        className="absolute bottom-10 inset-x-0 mx-auto text-center font-mono text-[10px] md:text-sm uppercase tracking-widest text-neutral-500 flex items-center justify-center gap-4"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e] animate-pulse" />
        system / initializing signal
      </div>
    </div>
  );
};
