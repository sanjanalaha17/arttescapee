"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface productType {
    title: string,
    image: string,
    price: number,
    slug: string
}

const ProductCard = ({ title, image, price, slug }: productType) => {
    const router = useRouter()
    return (
        <div className='flex flex-col w-62.5 h-87.5 hover:scale-[1.05] gap-4 transition-transform duration-300 ease-out cursor-pointer max-sm:p-4'
            onClick={() => router.push(`/products/${slug}`)}
        >
            <div className='relative w-full h-[80%] '>
                <Image
                    fill
                    src={image}
                    alt='product'
                    className='object-contain'
                />
            </div>
            <div className='w-full h-[20%]'>
                <p className='font-primary text-sm text-neutral-950'>{title}</p>
                <p className='font-primary text-sm text-neutral-600'>₹{price}</p>
            </div>
        </div>
    )
}

export default ProductCard