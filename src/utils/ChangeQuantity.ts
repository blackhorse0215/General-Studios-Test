const UPDATE_LINE_ITEMS_MUTATION = `
  mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout {
        id
        lineItems(first: 10) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }
`;

export async function updateLineItemQuantity(checkoutId: string, lineItemId: string, quantity: number) {
    const endpoint = 'https://blackhorsedev.myshopify.com/api/2024-04/graphql';
    const storefrontAccessToken = '7db2a4b955ecffa57c65e91ff17893ae';
  
    const formattedCheckoutId = `${checkoutId}`;
    const formattedLineItemId = `${lineItemId}`;
  
    const variables = {
      checkoutId: formattedCheckoutId,
      lineItems: [{
        id: formattedLineItemId,
        quantity: quantity
      }]
    };
  
    const body = JSON.stringify({
      query: UPDATE_LINE_ITEMS_MUTATION,
      variables
    });
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': storefrontAccessToken
        },
        body
      });
  
  
      const data = await response.json();
  
      if (response.ok && !data.errors) {
        return data.data.checkoutLineItemsUpdate.checkout;
      } else {
        throw new Error(data.errors?.map((error: any) => error.message).join(', ') || 'Unknown error');
      }
    } catch (error) {
      console.error('Error updating line item quantity:', error);
      throw new Error('Failed to update line item quantity');
    }
  }