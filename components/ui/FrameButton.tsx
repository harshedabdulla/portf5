"use client";
import React, { useRef, MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const FrameButton = ({
  title,
  icon,
  position = "left",
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { contextSafe } = useGSAP({ scope: buttonRef });

  const handleMouseMove = contextSafe((e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    gsap.to(buttonRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  });

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn(
        "relative group inline-flex items-center justify-center border border-neutral-700 bg-transparent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-900 shadow-xl will-change-transform z-50",
        otherClasses
      )}
    >
      {/* Corner cutouts/squares */}
      <span className="absolute -left-[1px] -top-[1px] h-2 w-2 border border-neutral-500 bg-[#0a0a0a] group-hover:bg-white transition-colors duration-300" />
      <span className="absolute -right-[1px] -top-[1px] h-2 w-2 border border-neutral-500 bg-[#0a0a0a] group-hover:bg-white transition-colors duration-300" />
      <span className="absolute -left-[1px] -bottom-[1px] h-2 w-2 border border-neutral-500 bg-[#0a0a0a] group-hover:bg-white transition-colors duration-300" />
      <span className="absolute -right-[1px] -bottom-[1px] h-2 w-2 border border-neutral-500 bg-[#0a0a0a] group-hover:bg-white transition-colors duration-300" />
      
      {position === "left" && <span className="mr-3">{icon}</span>}
      <span className="font-mono uppercase tracking-widest">{title}</span>
      {position === "right" && <span className="ml-3">{icon}</span>}
    </button>
  );
};
