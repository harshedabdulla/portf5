import React from 'react'
import { FrameButton } from './ui/FrameButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-8 pt-36 relative h-[80vh] flex items-center justify-center'>
        {/* Transparent spacer, background is provided globally in app/page.tsx */}
        <div className="absolute inset-0 z-0 h-full w-full bg-transparent"></div>
        
        <div className='flex justify-center relative my-12 z-10'>
            <div className='max-w-[80vw] w-full flex flex-col items-start justify-center relative px-4 md:px-10'>
                {/* Structural Metadata (Left) */}
                <div className="absolute -left-4 lg:-left-12 top-0 h-full flex flex-col justify-between py-8 opacity-40 font-mono text-[10px] hidden lg:flex">
                  <span className="-rotate-90 origin-left whitespace-nowrap">p. 001</span>
                  <span className="-rotate-90 origin-left whitespace-nowrap">Vol. 1 / 2026</span>
                </div>

                <h1 className='text-left text-6xl md:text-[100px] lg:text-[130px] font-bold tracking-tighter text-white mb-2 leading-[0.9] uppercase'>
                  HARSHED
                  <br />
                  ABDULLA<span className="text-[#f43f5e]">.</span>
                </h1>
                
                <h2 className='tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs text-neutral-500 mb-8 font-mono mt-6 flex items-center gap-4'>
                    <span className="w-8 md:w-12 h-px bg-neutral-700" />
                    / Blockchain & Smart Contract Engineer
                </h2>
                
                <p className='text-left mb-10 text-neutral-400 text-sm md:text-base max-w-xl font-light'>
                  Building secure, scalable Web3 infrastructure. Focusing on EVM smart contracts, Rust actor models, and Account Abstraction (ERC-4337).
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start justify-start">
                  <a href="#projects" className='flex justify-start text-left'>
                      <FrameButton 
                        title='Explore Work'
                        icon={<FaLocationArrow/>}
                        position='right' 
                        otherClasses='!bg-neutral-900 border-neutral-700 hover:bg-white hover:text-black font-semibold'
                      />
                  </a>
                  <a href="/resume.pdf" target="_blank" className='flex justify-start text-left'>
                      <FrameButton 
                        title='View Resume'
                        icon={<FaLocationArrow className="rotate-45" />}
                        position='right' 
                        otherClasses='!bg-transparent !border-neutral-500 text-neutral-300 hover:bg-neutral-900 hover:text-white'
                      />
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero