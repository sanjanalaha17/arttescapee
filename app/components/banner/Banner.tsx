import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='w-full sm:h-125 grid grid-cols-2 max-sm:grid-cols-1'>
            <div className='col-span-1 flex items-left justify-end flex-col p-20 max-sm:order-1'>
                <p className=' text-8xl max-sm:text-5xl font-secondary font-extrabold text-left'>Timeless</p>
                <p className=' text-8xl max-sm:text-5xl font-secondary font-extrabold text-left'>artistry</p>
            </div>
            <div className='col-span-1 relative  h-125 '>
                <img
                    src='https://passionate-animal-cebee928de.media.strapiapp.com/Neutral_Photo_Frame_Mockup_Father_s_Day_Instagram_Post_b1479d45ad.png'
                    alt='maine page banner'
                    className='w-full h-full object-cover object-bottom'
                />
            </div>
        </div>
    )
}

export default Banner