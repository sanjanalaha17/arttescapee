'use client'

import React from 'react'
import Iconify from './Iconify/Iconify'
import { useRouter } from 'next/navigation'


const DesktopHeader = () => {
    const router = useRouter()

    return (
        <div className=' w-full p-4 px-12 backdrop-blur-md bg-transparent grid grid-cols-12'>
            <div className=' col-span-4'>
                <p className=' font-primary font-bold'>Arttescapee</p>
            </div>
            <div className=' col-span-4 flex items-center justify-center gap-6'>
                <div className='font-primary text-sm font-normal text-gray-600 hover:text-black cursor-pointer' onClick={() => router.push('/')}>Home</div>
                <div className='font-primary text-sm font-normal text-gray-600 hover:text-black cursor-pointer' onClick={() => router.push('/collections')}>Catalog</div>
                <div className='font-primary text-sm font-normal text-gray-600 hover:text-black cursor-pointer' onClick={() => router.push('/contact')}>Contact</div>
            </div>
            <div className=' col-span-4 flex items-center justify-end gap-6'>
                <Iconify icon='octicon:search-16' className='text-gray-600 hover:text-black cursor-pointer text-md' />
                <button onClick={() => router.push('/account')}>
                    <Iconify icon='octicon:person-16' className='text-gray-600 hover:text-black cursor-pointer text-md' />
                </button>

                <Iconify icon='streamline:shopping-bag-hand-bag-2-remix' className='text-gray-600 hover:text-black cursor-pointer text-md' />
            </div>
        </div>
    )
}

export default DesktopHeader