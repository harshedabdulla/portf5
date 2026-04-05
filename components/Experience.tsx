import { workExperience } from '@/data'
import React from 'react'
import { SpotlightCard } from './ui/SpotlightCard'

const Experience = () => {
  return (
    <div className='py-16 w-full max-w-7xl mx-auto' id="experience">
        <h1 className='text-3xl md:text-5xl font-bold text-center text-white drop-shadow-lg mb-16'>
          Work {" "} 
          <span className='text-neutral-300 italic font-serif'>
            Experience
          </span>
        </h1>
        
        <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-8 px-4'>
          {workExperience.map((card) => (
            <SpotlightCard 
              key={card.id}
              className='h-full w-full'>
              <div className='flex flex-col lg:flex-row items-start p-6 lg:p-8 h-full w-full'>
              
                <img src={card.thumbnail} alt={card.title} className='w-20 md:w-24 lg:w-28 mb-6 lg:mb-0 grayscale opacity-80' />
                
                <div className='lg:ms-8 flex flex-col justify-center w-full'>
                  <div className='flex justify-between items-start mb-2'>
                    <h2 className='text-xl md:text-2xl font-bold text-white'>{card.title}</h2>
                    <p className='font-mono text-[10px] md:text-xs text-zinc-400 bg-black/40 backdrop-blur-md px-2 py-1 rounded border border-neutral-700/50'>{card.time}</p>
                  </div>
                  <p className='text-neutral-400 font-light text-sm md:text-base leading-relaxed mt-2'>{card.desc}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
   </div>
  )
}

export default Experience