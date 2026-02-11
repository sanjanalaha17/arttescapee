import { gql } from "graphql-request";


export const create_order = gql`
mutation Mutation($data: OrderInput!) {
  createOrder(data: $data) {
    documentId
    order_id
  }
}
`