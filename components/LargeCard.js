import React from 'react'
import Image from 'next/image'

const LargeCard = ({ img, title, description, buttonText }) => {
    return (
        <div className='relative py-5 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image 
                src={img} 
                alt=""
                layout='fill' 
                objectFit='cover' 
                className='rounded-2xl' />
            </div>
            <div className='absolute top-1/4 left-12'>
                <h3 className='text-3xl w-64 mb-3'>{title}</h3>
                <p>{description}</p>
                <button className='text-white bg-gray-800 rounded-lg px-3 py-1 mt-2'>{buttonText}</button>
            </div>
        </div>
    )
}

export default LargeCard
