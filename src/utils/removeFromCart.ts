const SHOPIFY_STORE_URL = 'https://blackhorsedev.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = '7db2a4b955ecffa57c65e91ff17893ae';

interface RemoveProductProps {
  checkoutId: string;
  lineItemIdToRemove: string;
}

interface RemoveProductFromCheckoutResponse {
  data: {
    checkoutLineItemsRemove: {
      checkout: {
        id: string;
        lineItems: {
          edges: {
            node: {
              id: string;
              title: string;
              quantity: number;
              variant: {
                id: string;
                priceV2: {
                  amount: string;
                };
              };
            };
          }[];
        };
      };
      checkoutUserErrors: {
        code: string;
        field: string;
        message: string;
      }[];
    };
  };
}

export const removeProductFromCheckout = async (
  checkoutId:string,
  lineItemIdToRemove:string[],
): Promise<void> => {

  
  const query = `
    mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
      checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
        checkout {
          id
          lineItems(first: 250) {
            edges {
              node {
                id
                title
                quantity
                variant {
                  id
                  priceV2 {
                    amount
                  }
                }
              }
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const variables = {
    checkoutId,
    lineItemIds: lineItemIdToRemove,
  };

  try {
    
    await fetch(`${SHOPIFY_STORE_URL}/api/2024-04/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': `${STOREFRONT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
    }).then(async(response)=>{

      const data: RemoveProductFromCheckoutResponse = await response.json();
  
      if (!data || !data.data || !data.data.checkoutLineItemsRemove) {
        throw new Error('Failed to remove product from checkout');
      }
  
      const { checkout, checkoutUserErrors } = data.data.checkoutLineItemsRemove;
  
      if (checkoutUserErrors && checkoutUserErrors.length > 0) {
        const errorMessages = checkoutUserErrors.map((error) => error.message).join(', ');
        throw new Error(`Error removing product from cart: ${errorMessages}`);
      }
  
    })
    .catch((err)=>{
      console.log(err);
    })


    // Optionally, handle state update or UI refresh to reflect the removal

  } catch (error) {
    console.error('Error removing product from cart:', error);
    // Optionally, handle error state or display error message to user
  }
};