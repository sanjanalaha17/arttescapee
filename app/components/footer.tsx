'use client'

import React from 'react'
import GeneralButton from './GeneralButton/GeneralButton'
import { useRouter } from 'next/navigation'

const Footer = () => {
    const router = useRouter()

    return (
        <div className='w-full p-20 grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-4 max-sm:p-10 '>
            <div className=' col-span-1 flex flex-col gap-2'>
                <div className='font-primary text-md font-normal text-gray-600 hover:text-black cursor-pointer' onClick={() => router.push('/')}>Home</div>
                <div className='font-primary text-md font-normal text-gray-600 hover:text-black cursor-pointer' onClick={() => router.push('/collections')}>Catalog</div>
                <div className='font-primary text-md font-normal text-gray-600 hover:text-black cursor-pointer' onClick={() => router.push('/contact')}>Contact</div>
            </div>
            <div className=' col-span-1'>
                <div className=' col-span-1 flex flex-col gap-2'>
                    <div className='font-primary text-md font-normal text-gray-600 hover:text-black cursor-pointer' onClick={() => router.push('/about-us')}>About Us</div>
                    <div className='font-primary text-md font-normal text-gray-600 hover:text-black cursor-pointer' onClick={() => router.push('/return-policy')}>Return Policy</div>
                    <div className='font-primary text-md font-normal text-gray-600 hover:text-black cursor-pointer' onClick={() => router.push('/faq')}>FAQ</div>
                </div>
            </div>
            <div className=' col-span-1 flex flex-col gap-2'>
                <p className='font-primary font-medium text-2xl'>Join Our Newsletter</p>
                <div className='flex max-sm:flex-col items-center gap-2'>
                    <input placeholder='Email address' className=' placeholder:text-sm placeholder:font-primary text-primary font-normal  p-2 border w-[80%] max-sm:w-full border-neutral-950 outline-none focus:border-2 hover:bg-neutral-100' />
                    <button className='font-primary w-[20%] max-sm:w-full  font-normal p-2 bg-neutral-950 text-neutral-100 cursor-pointer hover:bg-neutral-800'>Sign up</button>
                </div>

            </div>

        </div>
    )
}

export default Footer