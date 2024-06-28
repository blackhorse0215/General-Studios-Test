import { h, render } from 'preact';
import { useState, useEffect, useCallback, useContext } from 'preact/hooks';
import { addProductToCheckout } from '../../utils/shopify';
import MyContext from '../../context/Mycontext';

function BuyButton({id}){

    const {Mycontext, setMycontext} = useContext(MyContext)

    const addCart= async ()=>{
        if(Mycontext.buttonState == false){
            return
        }
        const checkid = localStorage.getItem('checkoutID');
        try{
            await addProductToCheckout(checkid, id, 1)
            .then((res)=>{
                setMycontext({...Mycontext, cartState:true})
                document.body.style.overflow = 'hidden';
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        catch{
            console.log('error');
        }
    }

    return (
        <button onClick={addCart} value={id} className={`mt-20px ${Mycontext.buttonState == true ? 'bg-black cursor-pointer' : 'bg-gray-500 cursor-not-allowed'} w-full h-60px flex items-center justify-center text-21px text-white`}>Buy now</button>
    )
}

export default BuyButton;