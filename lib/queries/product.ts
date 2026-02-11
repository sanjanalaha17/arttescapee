import { gql } from "graphql-request";

export const get_all_products = gql`
query Products($pagination: PaginationArg) {
  products(pagination: $pagination) { 
    images {
      url
    }
    price  
    slug 
    title
  }
}
`

export const get_specific_product = gql`
query Products($filters: ProductFiltersInput) {
  products(filters: $filters) { 
    images {
      url
    }
    price  
    slug 
    title
    description
    sku
    publishedAt
    specifications
  }
}
`