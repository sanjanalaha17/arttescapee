import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton'

const ThirdLayout = () => {
    return (
        <div className='w-full sm:h-[80vh]  grid grid-cols-5 max-sm:grid-cols-1 '>
            <div className='w-full col-span-3 sm:h-[80vh] max-sm:py-10 bg-neutral-950 flex flex-col items-center justify-center'>
                <p className=' text-6xl max-sm:text-5xl font-primary font-bold text-white leading-16'>Browse Our<br /> Best Sellers</p>
                <GeneralButton text='Shop Now' bgColor='text-neutral-200' />
            </div>
            <div className='w-full col-span-2 sm:h-[80vh]'>
                <img src="https://passionate-animal-cebee928de.media.strapiapp.com/mandala_3_64d71b13c0.png" alt='first image' className='w-full h-full object-cover object-top' />
            </div>
        </div>
    )
}

export default ThirdLayout