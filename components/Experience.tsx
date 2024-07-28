import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
  return (
    <div className='pt-2 pb-16' id="experience">
        <h1 className='heading pb-12'>Work {" "} <span className='text-blue-300'>Experience</span></h1>
        <div className='w-full mt-4 grid lg:grid-cols-4 grid-cols-1 gap-10'>
          {workExperience.map((card) => (
            <Button 
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius='.3rem'
              className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
              <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 h-56'>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                  <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                  <p className='text-start text-white-200 mt-3'>{card.time}</p>
                </div>
              </div>
            </Button>
          ))}
        </div>
   </div>
  )
}

export default Experience