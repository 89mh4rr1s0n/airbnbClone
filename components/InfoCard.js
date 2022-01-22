import React from 'react'
import Image from 'next/image'
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = (props) => {
    return (
        <div className='flex py-5 border-t-2 flex-grow cursor-pointer hover:opacity-80
        hover:shadow-xl pr-10 transition transition-200 ease-out'>
            <div className='relative h-24 w-40 sm:h-36 sm:w-60 flex-shrink-0 border-top'>
                <Image
                className='rounded-2xl'
                src={props.img}
                layout='fill'
                objectFit='cover'
                />
            </div>
            <div className='pl-4 flex flex-col flex-grow'>
                <div className='flex justify-between'>
                    <p className='text-gray-500 text-sm'>{props.location}</p>
                    <HeartIcon className='h-5 cursor-pointer'/>
                </div>
                <p className='font-semibold text-lg py-1'>{props.title}</p>
                <p className='text-sm flex-grow'>{props.description}</p>
                <div className='flex justify-end text-xl font-semibold pb-1 lg:text-2xl'>{props.price}</div>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <StarIcon className='h-4 text-yellow-600'/>
                        <div className='text-sm font-semibold'>{props.star}</div>
                    </div>
                    <div className='text-sm'>{props.total}</div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
