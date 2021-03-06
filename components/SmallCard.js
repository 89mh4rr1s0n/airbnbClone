import React from 'react'
import Image from 'next/image'

const SmallCard = ({img, location, distance}) => {
    return (
        <div className='flex items-center m-2 space-x-2 
        cursor-pointer rounded-xl hover:bg-gray-200 
        hover:scale-105 transition-transform duration-200 ease-out'>
            <div className='relative h-16 w-16'>
                <Image 
                src={img}
                alt=""
                layout='fill'
                className='rounded-lg'
                />
            </div>
            <div>
                <h2 className='font-semibold'>{location}</h2>
                <h2 className='text-gray-600'>{distance}</h2>
            </div>
        </div>
    )
}

export default SmallCard
