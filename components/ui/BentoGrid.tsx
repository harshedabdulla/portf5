"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { IoCopyOutline } from "react-icons/io5";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import animationData from "@/data/confetti.json";
import { FrameButton } from "./FrameButton";
import { SpotlightCard } from "./SpotlightCard";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
         "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    const text = "harshed2004@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <SpotlightCard
      className={cn(
        "row-span-1 group/bento w-full h-full",
        className
      )}
    >
      <div className="justify-between flex flex-col space-y-4 w-full h-full">
       <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {['Rust','Solidity', 'Foundry', 'Hardhat'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-1 lg:px-3 py-2 px-3 text-xs opacity-50 
                    lg:opacity-100 rounded-none border border-neutral-800 text-center bg-[#111] text-neutral-400 font-mono"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-none text-center bg-[#111]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-none text-center bg-[#111]"></span>
                {['Node.js','TypeScript','AWS', 'ICP'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-1 lg:px-3 py-2 px-3 text-xs opacity-50 
                    lg:opacity-100 rounded-none border border-neutral-800 text-center bg-[#111] text-neutral-400 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

           {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie animationData={animationData} loop={copied} autoplay={copied} style={{ height: 200, width: 400 }} />
              </div>

              <FrameButton
                title={copied ? "Email Copied!" : "Copy Address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-black border-neutral-700 text-xs w-full lg:w-auto"
              />
            </div>
          )}
    </div>
    </div>
    </div>
    </SpotlightCard>
  );
};
