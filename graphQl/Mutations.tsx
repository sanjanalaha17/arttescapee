"use client"

import { graphqlClient } from "@/lib/GraphQlClient"
import { create_order } from "@/lib/mutations/order"
import { useMutation } from "@tanstack/react-query"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import { useRouter } from "next/navigation";

interface OrderType {
    product_sku: string
    product_slug: string
    order_amount: number
    quantity: number

}

export const CreateOrder = () => {

    const router = useRouter()
    return useMutation({
        mutationFn: async ({
            product_sku,
            product_slug,
            order_amount,
            quantity
        }: OrderType) => {


            const document = {
                "data": {
                    "order_amount": order_amount,
                    "order_id": uuidv4(),
                    "product_sku": product_sku,
                    "product_slug": product_slug,
                    "quantity": quantity,
                    "user_id": "1"
                }
            }
            return graphqlClient.request(create_order, document)
        },
        onSuccess: (data) => {
            console.log("DATA", data)
            router.push(`/order-success`)
        },

    })
}