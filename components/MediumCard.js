import React from 'react'
import Image from 'next/image'

const MediumCard = ({img, title}) => {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-2'>
            <div className='relative h-80 w-80'>
                <Image 
                src={img} 
                alt=""
                layout='fill' 
                className='rounded-xl'/>
            </div>
            <h3 className='text-xl my-2'>{title}</h3>
        </div>
    )
}

export default MediumCard
