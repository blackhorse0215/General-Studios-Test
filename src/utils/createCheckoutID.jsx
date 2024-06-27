import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: '7db2a4b955ecffa57c65e91ff17893ae',
    domain: 'blackhorsedev.myshopify.com',
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