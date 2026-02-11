'use client'

import React from 'react'
import Iconify from '../Iconify/Iconify'
import { useWindowSize } from 'react-use'

const FilterBar = () => {
    const { width } = useWindowSize()
    return (
        <div className='py-6 grid grid-cols-2 max-sm:px-6'>
            <div className='col-span-1 flex items-center gap-6 max-sm:gap-1'>
                {width > 648 ? <>
                    <div className=' flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black'>
                        <p className='font-primary text-sm '>Availability</p>
                        <Iconify icon='uil:angle-down' className=' cursor-pointer text-sm' />
                    </div>
                    <div className=' flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black'>
                        <p className='font-primary text-sm '>Price</p>
                        <Iconify icon='uil:angle-down' className=' cursor-pointer text-sm' />
                    </div>
                </>
                    :
                    <>
                        <div className=' flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black'>
                            <Iconify icon='fluent:filter-12-filled' className=' cursor-pointer text-sm' />
                            <p className='font-primary text-sm '>Filters</p>
                        </div>
                    </>}


            </div>
            <div className='col-span-1  flex items-center gap-6 justify-end'>
                <div className=' flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black'>
                    <p className='font-primary text-sm '>10 items</p>

                </div>
            </div>
        </div>
    )
}

export default FilterBar