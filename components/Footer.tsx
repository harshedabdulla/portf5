import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto pt-20 pb-10 px-4 border-t border-neutral-900 mt-20" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white lg:max-w-[45vw] mb-6 drop-shadow-lg">
          Ready to scale <br />your {" "}
          <span className="text-neutral-300 italic font-serif">
            digital protocol?
          </span>
        </h1>
        <p className="text-neutral-400 font-light text-center mb-10 max-w-lg">
          Reach out today and let&apos;s discuss how I can help architect and build your decentralized applications.
        </p>
        <a href="mailto:harshed2004@gmail.com" className="mb-20">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="!bg-[#111] !border-neutral-800 text-white font-mono text-xs hover:bg-[#222]"
          />
        </a>
      </div>
      
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center border-t border-neutral-900 pt-8">
        <p className="md:text-base text-sm font-light text-neutral-500 mb-6 md:mb-0">
          Copyright © 2026 Harshed Abdulla
        </p>

        <div className="flex items-center gap-4">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.link} target="_blank" rel="noreferrer" className="w-10 h-10 flex justify-center items-center bg-black/60 backdrop-blur-md rounded-none border border-neutral-800/80 hover:border-neutral-500 hover:bg-black/80 transition-all duration-300">
                <img src={info.img} alt="social icon" width={18} height={18} className="opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;