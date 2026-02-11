"use client"

import React from 'react'
import Iconify from '@/app/components/Iconify/Iconify'
import { GetSpecificProduct } from '@/graphQl/Queries'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const ProductComponentClient = () => {

    return (
        <div>
            <div className='w-full  grid grid-cols-5 max-sm:grid-cols-1 py-4 sm:px-10 max-sm:px-4 max-sm:gap-6'>
                <div className='w-full h-full col-span-3 relative flex flex-col items-center justify-center'>
                    <div className='w-full h-[80vh]'>
                        <img src="https://passionate-animal-cebee928de.media.strapiapp.com/Blood_Moon_1_2f8dc5ab7e.png"
                            alt='product'
                            className='w-full h-full object-contain'
                        />
                    </div>

                    <div className='w-full mt-4 flex flex-wrap items-center justify-left gap-2 max-sm:px-2'>
                        <div className='w-25 h-45 max-sm:w-12.5 max-sm:h-20  cursor-pointer'>
                            <img src="https://passionate-animal-cebee928de.media.strapiapp.com/Blood_Moon_1_2f8dc5ab7e.png"
                                alt='product'
                                className='w-full h-full object-contain'
                            />
                        </div>
                        <div className='w-25 h-45 cursor-pointer max-sm:w-12.5 max-sm:h-20'>
                            <img src="https://passionate-animal-cebee928de.media.strapiapp.com/Blood_Moon_1_2f8dc5ab7e.png"
                                alt='product'
                                className='w-full h-full object-contain'
                            />
                        </div>
                        <div className='w-25 h-45 cursor-pointer max-sm:w-12.5 max-sm:h-20'>
                            <img src="https://passionate-animal-cebee928de.media.strapiapp.com/Blood_Moon_1_2f8dc5ab7e.png"
                                alt='product'
                                className='w-full h-full object-contain'
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className=' flex flex-col gap-1'>
                        <p className='font-secondary font-medium text-3xl'>Blood Moon</p>
                        <p className='font-primary text-neutral-700 text-md'>₹100.00</p>
                        <p className='text-neutrak-700 font-primary text-xs text-left my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
                        <p className='font-primary text-neutral-500 text-xs'>Inclusive of all taxes</p>
                        <p className='font-primary text-neutral-500 text-xs'>SKU: <span className='text-neutral-900'>ER096-6-G</span></p>

                    </div>
                    <hr className='border-gray-200 my-6' />
                    <div className='w-full grid grid-cols-5 max-sm:grid-cols-1 gap-2'>
                        <div className='col-span-2 flex  justify-between gap-2 border border-neutral-900'>
                            <button className='p-4 cursor-pointer hover:text-neutral-100  text-neutral-700  hover:bg-neutral-950'>
                                <Iconify icon='tabler:minus' className='' />
                            </button>
                            <div className='p-4'>
                                <p>2</p>
                            </div>
                            <button className='p-4 cursor-pointer text-neutral-700  hover:text-neutral-100 hover:bg-neutral-950'><Iconify icon='stash:plus-solid' className='' /></button>
                        </div>
                        <div className='col-span-3'>
                            <button className='w-full p-4 flex items-center justify-center gap-2 cursor-pointer  text-neutral-100  hover:bg-neutral-800 bg-neutral-950'>
                                <Iconify icon='fe:add-cart' className='' />
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <button className='w-full mt-2 p-4 flex items-center justify-center gap-2 cursor-pointer  text-neutral-100  hover:bg-neutral-800 bg-neutral-950'>
                        Buy it Now
                    </button>
                    <div className='w-full border border-neutral-200 mt-6'>
                        <div className='p-4 bg-neutral-950 '>
                            <p className='text-white font-primary text-sm'>Specifications</p>
                        </div>
                        <div className='p-4'>
                            <div>
                                <p className='font-primary text-neutral-950 font-normal text-sm'>Dimensions</p>
                                <div className='mt-4 flex flex-col items-left gap-2'>
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Material Used</p>
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Material Used</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <p className='font-primary text-neutral-950 font-normal text-sm'>Color Material</p>
                                <div className='mt-4 flex flex-col items-left gap-2'>
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Material Used</p>
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Material Used</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <p className='font-primary text-neutral-950 font-normal text-sm'>Frame Material</p>
                                <div className='mt-4 flex flex-col items-left gap-2'>
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Material Used</p>
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Material Used</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <p className='font-primary text-neutral-950 font-normal text-sm'>Canvas Material</p>
                                <div className='mt-4 flex flex-col items-left gap-2'>
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Material Used</p>
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Material Used</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponentClient