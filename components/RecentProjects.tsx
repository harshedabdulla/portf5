import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <div className='py-16' id="projects">
        <h1 className='heading'>A small selection of {" "} <span className='text-green-300'>recent projects</span></h1>
        <div className='flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-6'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='lg:min-h-[32.5rem] sm:h-[8rem] h-[26rem] flex items-center justify-center sm:w-[400px] w-[60vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[400px] sm:h-[28vh] w-[80vw] overflow-hidden h-[28vh] mb-8'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-4xl bg-[#13162d]'>
                                <img src='/bg.png' alt={title} />
                            </div>
                            <img src={img} 
                            alt={title}
                            className='absolute bottom-0 z-10' />
                        </div>
                        <div className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </div>
                        <div className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </div>
                        <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex lg:text-xl md:text-xs text-sm text-green-300">
                    Check Live Site
                  </div>
                </div>
                    </div>
                    </PinContainer>    
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects