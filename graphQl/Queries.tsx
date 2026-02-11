
'use client'


import { graphqlClient } from "@/lib/GraphQlClient"
import { get_all_products, get_specific_product } from "@/lib/queries/product"
import { useQuery } from "@tanstack/react-query"


export const GetAllProducts = () => {
    return useQuery({
        queryKey: ['get-all-products'],
        queryFn: () => {
            return graphqlClient.request(get_all_products)
        }
    })
}

export const GetSpecificProduct = (slug: string) => {
    return useQuery({
        queryKey: ['get-specific-product'],
        queryFn: () => {

            const document = {
                "filters": {
                    "slug": {
                        "eq": slug
                    }
                }
            }

            return graphqlClient.request(get_specific_product, document)
        }
    })
}