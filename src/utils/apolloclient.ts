import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://https://blackhorsedev.myshopify.com/api/2024-04/graphql.json'; // Replace with your Shopify store endpoint
const storefrontAccessToken = '7db2a4b955ecffa57c65e91ff17893ae'; // Replace with your Storefront API access token

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
  },
});