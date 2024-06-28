import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN,
    domain: import.meta.env.VITE_SHOPIFY_STORE_URL,
  });
  
  // Example usage:
export async function createCheckoutSession() {
    if(!localStorage.getItem('checkoutID')){
      try {
        const checkout = await client.checkout.create();
        const checkoutId = checkout.id;
        localStorage.setItem('checkoutID', checkoutId)
      } catch (error) {
        console.error('Failed to create checkout session:', error);
      }
    }
  }