import React from 'react'
import Image from 'next/image'

function Banner() {
    return <>
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] 
        xl:h-[600px] 2xl:h-[700px]'>
            <Image src="/interer-stil-dizayn-1396.jpg"
            layout='fill'
            objectFit='cover'
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-xl font-semibold text-white'>Not sure where to go? Perfect.</p>
                <button className='bg-white px-4 py-2 rounded-full shadow-lg
                my-1 hover:shadow-xl active:scale-90 transition duration-100'>I'm flexible</button>
            </div>
        </div>
    </>
}

export default Banner
