import { h, render } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { getProductDetails } from '../../utils/shopify';

function HomeCollectionItem({id}){

    const [productDetails, setProductDetails] = useState({})

    useEffect(()=>{
        try {
            getProductDetails(id)
            .then((data)=>{
                setProductDetails(data)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        catch (error) {
            console.error('Error fetching productdetails:', error);
        }
    }, [])

    const moveTo=()=>{
        document.getElementById(`${productDetails.id}`).scrollIntoView({behavior:'smooth'})
    }

    return (
        <div onclick={moveTo} className="flex flex-col cursor-pointer">
            <div className="relative">
                <img className="relative w-200px max-2xl:w-120px h-120px object-cover transition-all duration-200 ease hover:transform hover:translate-y-b20px" src={productDetails.media?productDetails.media.edges[1].node.image.src:''} alt="" />
            </div>
            <h3 className="w-full break-words text-center">{productDetails.title}</h3>       
        </div>
    )
}

export default HomeCollectionItem;