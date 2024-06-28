import { h, render } from 'preact';
import { useState, useEffect, useContext} from 'preact/hooks';
import getSymbolFromCurrency from 'currency-symbol-map';

import {removeProductFromCheckout} from '../../utils/removeFromCart'
import {updateLineItemQuantity} from '../../utils/ChangeQuantity'
import MyContext from '../../context/Mycontext';


function Cartproduct(data){

    const {Mycontext, setMycontext} = useContext(MyContext)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)

    const checkoutId = localStorage.getItem('checkoutID')

    const removeOneProduct=(e)=>{
        if(data.data.quantity == 1){
            try{
                removeProductFromCheckout(checkoutId, [data.data.id])
                .then((res)=>{
                    setMycontext({...Mycontext, getDataState:`${res}${new Date()}`})
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
            catch{
                console.log('error');
            }
        }
        else{
            try{
                updateLineItemQuantity(checkoutId, data.data.id, data.data.quantity - 1)
                .then((res)=>{
                    setMycontext({...Mycontext, getDataState:`${res}${new Date()}`})
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
            catch{
                console.log('error');
            }
        }
    }

    const addOneProduct=(e)=>{
        try{
            updateLineItemQuantity(checkoutId, data.data.id, data.data.quantity + 1)
            .then((res)=>{
                setMycontext({...Mycontext, getDataState:`${res}${new Date()}`})
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        catch{
            console.log('error');
        }
    }

    const removeProduct=()=>{
        try{
            removeProductFromCheckout(checkoutId, [data.data.id])
            .then((res)=>{
                setMycontext({...Mycontext, getDataState:`${res}${new Date()}`})
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        catch{
            console.log('error');
        }
    }

    useEffect(()=>{
        data?.data?.variant?.selectedOptions.forEach(e=>{
            if(e.name == 'Color'){
                setColor(e.value)   
            }
            else if(e.name == 'Size'){
                setSize(e.value)
            }
        })
    },[])


    return (
        <div className="flex justify-between border-b border-black border-solid pb-20px pt-20px">
            <div className="flex justify-between gap-10px">
                <div className="h-80px w-80px">
                    <img src={data?.data?.variant?.product?.media?.edges[1]?.node.image.src} alt="" className="object-cover" />
                </div>  
                <div className="flex flex-col gap-10px">
                    <div className="flex flex-col">
                        <p>{data?.data?.title}</p>
                        <p>Color : {color}</p>
                        <p>Size : {size}</p>
                    </div>
                    <p onClick={removeProduct} className="underline cursor-pointer">Remove</p>
                </div>
            </div>
            <div className="flex gap-20px max-lg:flex-col max-lg:gap-10px">
                    <div className="flex gap-10px items-start">
                        <button onClick={removeOneProduct} value={data?.data?.id}>-</button>
                        <p>{data?.data?.quantity}</p>
                        <button onClick={addOneProduct} value={data?.data?.id}>+</button>
                    </div>
                <p>{getSymbolFromCurrency(data?.data?.variant?.priceV2?.currencyCode.toUpperCase())}{data?.data?.variant?.priceV2?.amount}</p>
            </div>
        </div>
    )
}

export default Cartproduct;