import { h, render } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import HomeCollectionItem from '../webcomponents/Homepage/HomeCollectionItem';
import { getProducts } from '../utils/shopify';

function HomeCollection(){

    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        try {
            getProducts()
            .then((data)=>{
                setProducts(data?data:[])
            })
            .catch((err)=>{
                console.log(err);
            })
          } catch (error) {
            console.error('Error fetching products:', error);
          }
    },[])

    return (
        <div className="min-h-dvh flex flex-col justify-end">
            <div className="py-50px pl-30px pr-100px gap-x-20px gap-y-50px flex flex-wrap max-lg:pr-50px max-2xl:pr-120px max-2xl:py-100px max-2xl:pl-50px max-sm:pl-20px max-sm:pr-20px max-sm:justify-around">
                {
                    products.map((node, index)=>(
                        <HomeCollectionItem id={node.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeCollection;