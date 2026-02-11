'use client'

import React from 'react'
import Iconify from './Iconify/Iconify'
import { useRouter } from 'next/navigation'

const MobileHeader = () => {
    const router = useRouter()

    return (
        <div className=' w-full p-4 px-8 backdrop-blur-md bg-transparent grid grid-cols-12'>
            <div className=' col-span-4 flex items-center gap-6'>
                <Iconify icon='heroicons-solid:menu-alt-4' className='text-gray-600 hover:text-black cursor-pointer text-md' />
                <Iconify icon='octicon:search-16' className='text-gray-600 hover:text-black cursor-pointer text-md' />
            </div>
            <div className=' col-span-4 flex items-center justify-center gap-6'>
                <p className=' font-primary font-bold'>Arttescapee</p>
            </div>
            <div className=' col-span-4 flex items-center justify-end gap-6'>
                <button onClick={() => router.push('/account')}>
                    <Iconify icon='octicon:person-16' className='text-gray-600 hover:text-black cursor-pointer text-md' />
                </button>
                <button>
                    <Iconify icon='streamline:shopping-bag-hand-bag-2-remix' className='text-gray-600 hover:text-black cursor-pointer text-md' />
                </button>


            </div>
        </div>
    )
}

export default MobileHeader