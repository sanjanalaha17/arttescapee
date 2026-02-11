'use client'

import React from 'react'
import FilterBar from '../components/FilterBar/FilterBar'
import ProductCard from '../components/ProductCard/ProductCard'
import { GetAllProducts } from '@/graphQl/Queries'
import Loader from '../loader'

const Page = () => {
    const { data, isLoading } = GetAllProducts()


    return isLoading ? <Loader /> : (
        <div className='w-full px-10 max-sm:px-0'>
            <div className='py-10 max-sm:px-8'>
                <p className='text-6xl font-secondary font-bold'>Collections</p>
            </div>
            <div>
                <FilterBar />
            </div>
            <div className='w-full grid grid-cols-5 max-sm:grid-cols-2 gap-4'>

                {
                    data?.products?.map((item: any, idx: number) => <div className='col-span-1' key={idx}>
                        <ProductCard
                            title={item?.title}
                            image={item?.images[0]?.url}
                            price={item?.price}
                            slug={item?.slug}
                        />
                    </div>)}

            </div>
        </div>

    )
}

export default Page