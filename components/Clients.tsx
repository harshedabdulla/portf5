import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
   <div className='pt-8 pb-16' id="testimonials">
        <h1 className='heading pb-12'>Glimpse of {" "} <span className='text-blue-300'>recent achievements</span></h1>
        <div className='flex flex-col items-center'>
            <div className='h-[50vh] md:h-[32rem] rounded-md flex flex-col antialiased items-center'>
            <InfiniteMovingCards
                items = {testimonials}
                direction='right'
                speed='slow'
            />
            </div>
            <div className='flex flex-wrap items-center justify-center gap-8 md:gap-16 max-lg:mt-10'>
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img
                            src={nameImg}
                            alt={name}
                            className='md:w-24 w-20'
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
   
  )
}

export default Clients