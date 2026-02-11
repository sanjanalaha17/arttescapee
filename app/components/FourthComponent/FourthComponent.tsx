import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton'

const FourthComponent = () => {
    return (
        <div className='w-full p-10 bg-neutral-200 flex flex-col items-center justify-center gap-10'>
            <img src="https://passionate-animal-cebee928de.media.strapiapp.com/Chat_GPT_Image_Feb_10_2026_08_13_21_PM_Photoroom_71370626ee.png"
                alt='image'
                className='w-[300px] obect-contain'
            />
            <p className='text-5xl max-sm:w-full max-sm:text-3xl font-secondary font-extrabold text-center w-[75%]'>We believe in the transformative power of art to inspire and elevate everyday lives.</p>
            <GeneralButton text='Shop Now' />
        </div>
    )
}

export default FourthComponent