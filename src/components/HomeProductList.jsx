import { h, render } from 'preact';
import { useCallback, useContext, useEffect, useRef, useState } from 'preact/hooks';
import HomeProductItem from '../webcomponents/Homepage/HomeProductItem';
import MyContext from '../context/Mycontext';
import { getProducts } from '../utils/shopify';

function HomeProductList(){

    const {Mycontext, setMycontext} = useContext(MyContext)

    const [lists, setLists] = useState([])

    useEffect(()=>{
        try{
            getProducts()
            .then((data)=>{
                setLists(data)
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        catch{
            console.log('error');
        }
    },[])

    return (
        <div className="flex flex-col pr-70px max-lg:pr-0">
            {
                lists.map((item, index)=>(
                    <HomeProductItem id={item.id} />
                ))
            }
        </div>
    )
}

export default HomeProductList;