
'use client'


import Iconify from '@/app/components/Iconify/Iconify'
import { CreateOrder } from '@/graphQl/Mutations'
import { GetSpecificProduct } from '@/graphQl/Queries'
import axios from 'axios'
import { useRouter, useParams } from 'next/navigation'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'

interface productDataType {
    title: string
    slug: string
    image: string
    sku: string
    specifications: {
        COLOR_MATERIAL: string[]
        FRAME_MATERIAL: string[]
        CANVAS_MATERIAL: string[]
        DIMENSIONS: string[]
    }
    price: number
    description: string

}

const initValues: productDataType = {
    title: "",
    slug: "",
    image: "",
    sku: "",
    specifications: {
        DIMENSIONS: [],
        FRAME_MATERIAL: [],
        COLOR_MATERIAL: [],
        CANVAS_MATERIAL: []

    },
    price: 0,
    description: ""
}

const ProductPage = () => {

    const CreateOrderMuta = CreateOrder()
    const router = useRouter()
    const params = useParams()
    const slug = params.slug as string

    const [order_amount, setOrder_Amount] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(1)

    const { data, isLoading } = GetSpecificProduct(slug)

    const [productData, setProductData] = useState<productDataType>(initValues)

    const handlePayment = async () => {

        const { data, status } = await axios.post('/api/create-payment', {
            order_amount,
        })

        const order = data;

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: order.amount * 100,
            currency: order.currency,
            name: "Arttescapee",
            description: "Test Transaction",
            order_id: order.id,
            handler: function (response: any) {
                CreateOrderMuta.mutate({
                    product_sku: productData?.sku,
                    product_slug: productData?.slug,
                    order_amount: order_amount,
                    quantity: quantity
                })
            },
            prefill: {
                name: "Test User",
                email: "test@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#000000",
            },
        };

        const razor = new (window as any).Razorpay(options);
        razor.open();



    };

    useEffect(() => {
        if (productData?.price) {
            setOrder_Amount(productData.price * quantity)
        }
    }, [quantity, productData?.price])

    useEffect(() => {
        if (data && !isLoading) {
            setProductData({
                title: data?.products[0]?.title,
                price: data?.products[0]?.price,
                sku: data?.products[0]?.sku,
                image: data?.products[0]?.images[0]?.url,
                description: data?.products[0]?.description,
                specifications: data?.products[0]?.specifications,
                slug: data?.products[0]?.slug,
            })
            setOrder_Amount(data?.products[0]?.price)
        }
    }, [data, isLoading])
    return (
        <div>
            <div className='w-full  grid grid-cols-5 max-sm:grid-cols-1 py-4 sm:px-10 max-sm:px-4 max-sm:gap-6'>
                <div className='w-full h-full col-span-3 relative flex flex-col items-center justify-center'>
                    <div className='w-full h-[80vh]'>
                        <img src={productData?.image}
                            alt='product'
                            className='w-full h-full object-contain'
                        />
                    </div>

                    {/* <div className='w-full mt-4 flex flex-wrap items-center justify-left gap-2 max-sm:px-2'>
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
                    </div> */}
                </div>
                <div className='col-span-2'>
                    <div className=' flex flex-col gap-1'>
                        <p className='font-secondary font-medium text-3xl'>{productData?.title}</p>
                        <p className='font-primary text-neutral-700 text-md'>₹{productData?.price}</p>
                        <p className='text-neutrak-700 font-primary text-xs text-left my-2'>{productData?.description}</p>
                        <p className='font-primary text-neutral-500 text-xs'>Inclusive of all taxes</p>
                        <p className='font-primary text-neutral-500 text-xs'>SKU: <span className='text-neutral-900'>{productData?.sku}</span></p>

                    </div>
                    <hr className='border-gray-200 my-6' />
                    <div className='w-full grid grid-cols-5 max-sm:grid-cols-1 gap-2'>
                        <div className='col-span-2 flex  justify-between gap-2 border border-neutral-900'>
                            <button onClick={() => {
                                setQuantity((prevData) => prevData > 1 ? prevData - 1 : prevData)

                            }} className='p-4 cursor-pointer hover:text-neutral-100  text-neutral-700  hover:bg-neutral-950'>
                                <Iconify icon='tabler:minus' className='' />
                            </button>
                            <div className='p-4'>
                                <p>{quantity}</p>
                            </div>
                            <button onClick={() => {
                                setQuantity((prevData) => prevData < 10 ? prevData + 1 : prevData)

                            }} className='p-4 cursor-pointer text-neutral-700  hover:text-neutral-100 hover:bg-neutral-950'><Iconify icon='stash:plus-solid' className='' /></button>
                        </div>
                        <div className='col-span-3'>
                            <button className='w-full p-4 flex items-center justify-center gap-2 cursor-pointer  text-neutral-100  hover:bg-neutral-800 bg-neutral-950'>
                                <Iconify icon='fe:add-cart' className='' />
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
                    <button
                        onClick={handlePayment}
                        className='w-full mt-2 p-4 flex items-center justify-center gap-2 cursor-pointer  text-neutral-100  hover:bg-neutral-800 bg-neutral-950'>
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
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Width: {productData?.specifications?.DIMENSIONS[0]} cm</p>
                                    <p className='font-primary text-neutral-500 font-normal text-xs'>Height: {productData?.specifications?.DIMENSIONS[1]} cm</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <p className='font-primary text-neutral-950 font-normal text-sm'>Color Material</p>
                                <div className='mt-4 flex flex-col items-left gap-2'>
                                    {productData?.specifications?.["COLOR_MATERIAL"]?.map((item, idx) => <p key={idx} className='font-primary text-neutral-500 font-normal text-xs'>{item}</p>)}

                                </div>
                            </div>

                            <div className='mt-4'>
                                <p className='font-primary text-neutral-950 font-normal text-sm'>Frame Material</p>
                                <div className='mt-4 flex flex-col items-left gap-2'>
                                    {productData?.specifications?.["FRAME_MATERIAL"]?.map((item, idx) => <p key={idx} className='font-primary text-neutral-500 font-normal text-xs'>{item}</p>)}
                                </div>
                            </div>

                            <div className='mt-4'>
                                <p className='font-primary text-neutral-950 font-normal text-sm'>Canvas Material</p>
                                <div className='mt-4 flex flex-col items-left gap-2'>
                                    {productData?.specifications?.["CANVAS_MATERIAL"]?.map((item, idx) => <p key={idx} className='font-primary text-neutral-500 font-normal text-xs'>{item}</p>)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
