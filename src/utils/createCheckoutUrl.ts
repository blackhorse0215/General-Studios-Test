import Client, { Checkout } from 'shopify-buy';

const client = Client.buildClient({
    domain: 'blackhorsedev.myshopify.com', // Replace with your Shopify store domain
    storefrontAccessToken: '7db2a4b955ecffa57c65e91ff17893ae' // Replace with your Storefront API access token
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