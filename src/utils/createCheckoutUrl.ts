import Client, { Checkout } from 'shopify-buy';

const client = Client.buildClient({
    domain: import.meta.env.VITE_SHOPIFY_STORE_URL, // Replace with your Shopify store domain
    storefrontAccessToken: import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN // Replace with your Storefront API access token
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