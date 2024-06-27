// src/shopifyClient.ts
import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://blackhorsedev.myshopify.com/api/2024-04/graphql.json';
const accessToken = '7db2a4b955ecffa57c65e91ff17893ae';

const client = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': accessToken,
  },
});

export default client;
