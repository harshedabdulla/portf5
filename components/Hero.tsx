import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='green'/>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.1] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
        <div className='flex justify-center relative my-12 z-10'>
            <div className='max-w-[89vh]'>
                <h2 className='uppercase tracking-widest flex justify-center text-center text-xs text-green-100'>
                    Invite Tranquility
                </h2>
                <TextGenerateEffect words='Transforming Ideas into Powerful Applications. ⚡' className='text-center text-5xl font-bold'/>
                <p className='text-center md:tracking-wider mb-6 '>Hi, I am Harshed, a full stack developer based in Kochi</p>
                <a href="#about" className='flex justify-center text-center px-8'>
                    <MagicButton 
                    title='Work'
                    icon={<FaLocationArrow/>}
                    position='right' />
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default Hero