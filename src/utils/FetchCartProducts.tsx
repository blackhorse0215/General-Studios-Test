const SHOPIFY_STORE_URL = import.meta.env.VITE_SHOPIFY_STORE_URL;
const STOREFRONT_ACCESS_TOKEN = import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN;

interface ProductImage {
  src: string;
  mediaType:'IMAGE' | 'VIDEO'
}

type Variant = {
    id: string;
    priceV2: {
      amount: string;
      currencyCode: string;
    };
    product: {
      media: {
        edges: ProductImage[];
      };
      options: {
        name: string;
        values: string[];
      }[];
    };
    selectedOptions: {
      name: string;
      value: string;
    }[];
  };
  
  type Product = {
    id:string,
    title: string;
    quantity: number;
    variant: Variant;
  };
  
  type CheckoutLineItemEdge = {
    node: Product;
  };
  
  type Checkout = {
    id: string;
    lineItems: {
      edges: CheckoutLineItemEdge[];
    };
  };
  
  type FetchCartProductsResponse = {
    data: {
      node: Checkout;
    };
  };
  
  
  export const fetchCartProducts = async (checkoutId: string): Promise<Product[]> => {
    const query = `
    query($checkoutId: ID!) {
      node(id: $checkoutId) {
        ... on Checkout {
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
                    currencyCode
                  }
                  product {
                    media(first: 10) {
                      edges {
                        node {
                          mediaContentType
                          alt
                          ... on MediaImage {
                            image {
                              src
                            }
                          }
                          ... on Video {
                            sources {
                              url
                              format
                            }
                          }
                        }
                      }
                    }
                    options(first: 5) {
                      name
                      values
                    }
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  
    const variables = { checkoutId };
  
    const response = await fetch(`${SHOPIFY_STORE_URL}/api/2024-04/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': `${STOREFRONT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
    });
  
    const data: FetchCartProductsResponse = await response.json();
    return data.data.node.lineItems.edges.map(edge => edge.node);
  };