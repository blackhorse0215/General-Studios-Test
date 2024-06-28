import Client, { Checkout } from 'shopify-buy';

const client = Client.buildClient({
    domain: import.meta.env.VITE_SHOPIFY_STORE_URL,
    storefrontAccessToken: import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN 
});

export const createCheckoutUrl = async () => {
    try {
        const checkout: Checkout = await client.checkout.create();
        const checkoutWebUrl = checkout.webUrl;
        return checkoutWebUrl;
    } catch (error) {
      console.error('Error creating checkout:', error);
    }
  };