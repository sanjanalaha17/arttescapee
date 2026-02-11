import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton'

const SecondLayout = () => {
    return (
        <div className='w-full grid grid-cols-5 sm:h-screen max-sm:grid-cols-1'>
            <div className=' col-span-2 w-full sm:h-screen relative'>
                <div className=' absolute top-0 left-0 w-full h-full  bg-black/60 hover:bg-black/80 flex flex-col items-center justify-center gap-4'>
                    <p className='font-bold text-white text-3xl tracking-wider max-sm:text-center'>Exceptional Craftsmanship</p>
                    <GeneralButton text='Shop Now' />
                </div>
                <img src="https://passionate-animal-cebee928de.media.strapiapp.com/Screenshot_2026_02_10_194446_6045acd118.png" alt='first image' className='w-full h-full object-cover object-top' />
            </div>
            <div className=' col-span-3 w-full sm:h-screen relative'>
                <div className=' absolute top-0 left-0 w-full h-full  bg-black/60 hover:bg-black/80  flex flex-col items-center justify-center gap-4'>
                    <p className='font-bold text-white text-3xl tracking-wider'>Authentic Materials</p>
                    <GeneralButton text='Shop Now' />
                </div>
                <img src="https://passionate-animal-cebee928de.media.strapiapp.com/Whats_App_Image_2026_02_10_at_2_15_29_PM_65d2f9086b.jpeg" alt='first image' className='w-full h-full object-contain object-center' />
            </div>
        </div>
    )
}

export default SecondLayout