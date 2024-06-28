const SHOPIFY_STORE_URL = import.meta.env.VITE_SHOPIFY_STORE_URL;
const STOREFRONT_ACCESS_TOKEN = import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN;

interface FAQPage {
    body: string; // Assuming body is HTML content
    id: string;
    title: string;
    metafields: Metafield[];
  }
  interface Metafield {
    namespace: string;
    key: string;
    value: JSON;
  }
interface pageByHandles {
    pageByHandle: FAQPage;
}

 export  async function fetchFAQPageContent(handle: string): Promise<FAQPage | null> {
    try {
      const query = `
        query {
          pageByHandle(handle: "${handle}") {
            id
            title
            body
            metafields(identifiers: [
              { namespace: "custom", key: "faq" }
            ]) {
              namespace
              key
              value
            }
          }
        }
      `;
  
      const response = await fetch(`${SHOPIFY_STORE_URL}/api/2024-04/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();
      
  
      if (data.errors) {
        console.error('GraphQL Error:', data.errors);
        return null;
      }
  
      return data;
    } catch (error) {
      console.error('Failed to fetch FAQ page content:', error);
      return null;
    }
  }

