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
        </div>
    </div>
   
  )
}

export default Clients