import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 space-y-5 px-10 bg-gray-200'>
            <div className='space-y-4 text-sm py-5'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Matbnb Plus</p>
                <p>How Matbnb works</p>
            </div>
            <div className='space-y-4 text-sm  pb-5'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Safety Information</p>
                <p>Cancellations</p>
                <p>Report A Concern</p>
            </div>
            <div className='space-y-4 text-sm pb-5'>
                <h5 className='font-bold'>HOSTING</h5>
                <p>Try Hosting</p>
                <p>Matbnb: Insurance for Hosts</p>
                <p>Learning resources</p>
                <p>How to host responsibly</p>
            </div>
            <div className='space-y-4 text-sm pb-5'>
                <h5 className='font-bold'>DISCLAIMER</h5>
                <p>This is not a real site</p>
                <p>This is a clone by Matthew Harrison</p>
                <p>Thanks for viewing</p>
            </div>
        </div>
    )
}

export default Footer
