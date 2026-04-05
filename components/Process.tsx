import React from "react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function Process() {
  return (
    <div className='py-20 w-full max-w-7xl mx-auto' id="approach">
      <h1 className='text-3xl md:text-5xl font-bold text-center text-white drop-shadow-lg mb-16'>
        My {" "} 
        <span className='text-neutral-300 italic font-serif'>
          Approach
        </span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <Card 
            title="Architecture & Mapping" 
            step="01"
            description="We'll collaborate to map out the protocol's goals, target network, and key smart contract integrations. Focus on robust architecture and gas-optimized data structures."
        />
        <Card 
            title="Development & Security" 
            step="02"
            description="Building secure, reliable code using modern frameworks like Foundry and Hardhat. Implementing invariant and fuzz testing while adhering strictly to EVM security patterns."
        />
        <Card 
            title="Deployment & Maintenance" 
            step="03"
            description="Executing a flawless deployment on mainnet or L2s with comprehensive monitoring. Structuring decentralized governance mechanics and post-launch support."
        />
      </div>
    </div>
  );
}

const Card = ({
  title,
  step,
  description
}: {
  title: string;
  step: string;
  description: string;
}) => {
  return (
    <SpotlightCard className="flex flex-col p-8 w-full h-full relative group">
        
      {/* Decorative large Step number */}
      <h3 className="absolute -top-10 -right-4 text-[120px] font-bold text-neutral-800/30 group-hover:text-neutral-700/40 transition-colors duration-300 z-0 select-none">
        {step}
      </h3>

      <div className="relative z-10 flex flex-col h-full mt-4">
          <div className="bg-black/40 backdrop-blur-md text-zinc-300 font-mono text-xs px-3 py-1 rounded w-fit mb-6 border border-neutral-700/50 tracking-widest drop-shadow">
              PHASE {step}
          </div>
          <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
              {title}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
              {description}
          </p>
      </div>
    </SpotlightCard>
  );
};
