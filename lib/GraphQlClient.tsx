import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL!,
    {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
    }
)