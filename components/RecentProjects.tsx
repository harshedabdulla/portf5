import { projects } from '@/data'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { SpotlightCard } from './ui/SpotlightCard'

const RecentProjects = () => {
  return (
    <div className='py-16 max-w-7xl mx-auto' id="projects">
        <h1 className='text-3xl md:text-5xl font-bold text-center text-white drop-shadow-lg mb-16'>
          A selection of {" "} 
          <span className='text-neutral-300 italic font-serif'>
            recent protocols
          </span>
        </h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <a href={link} key={id} target="_blank" rel="noopener noreferrer" className='group block h-full'>
                    <SpotlightCard className='h-full'>
                      <div className='flex flex-col h-full p-6 lg:p-8'>
                        
                        {/* Image Container */}
                        <div className='relative w-full h-[30vh] overflow-hidden rounded-none bg-black/50 border border-neutral-800 mb-8'>
                            <img 
                              src={img} 
                              alt={title} 
                              className='absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0' 
                            />
                        </div>
                        
                        {/* Content */}
                        <div className='flex items-center justify-between mb-4'>
                            <h2 className='font-bold text-xl md:text-2xl text-white'>
                                {title}
                            </h2>
                            <FaArrowRight className='text-neutral-600 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-45' />
                        </div>
                        
                        <p className='text-neutral-400 text-sm md:text-base font-light mb-8 flex-grow'>
                            {des}
                        </p>
                        
                        {/* Footer / Tech Stack */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-800">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="border border-neutral-700 rounded-none bg-[#111] w-10 h-10 flex justify-center items-center shadow-lg"
                                        style={{
                                            transform: index !== 0 ? `translateX(-${10 * index}px)` : 'none',
                                            zIndex: 10 - index
                                        }}
                                    >
                                        <img src={icon} alt="tech icon" className="p-[8px]" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
                                View Repository
                            </span>
                        </div>
                      </div>
                    </SpotlightCard>
                </a>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects