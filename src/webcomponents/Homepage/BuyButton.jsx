import { h, render } from 'preact';
import { useState, useEffect, useCallback, useContext } from 'preact/hooks';
import { addProductToCheckout } from '../../utils/shopify';
import MyContext from '../../context/Mycontext';

function BuyButton(data){

    const {Mycontext, setMycontext} = useContext(MyContext)
    const [value, setValue] = useState(false)

    const addCart= async ()=>{
        if(value == false){
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

    useEffect(()=>{
        setValue(data)
    },[data])

    return (
        <button onClick={addCart} value={data.val.id} className={`mt-20px ${value.val.state == true ? 'bg-black' : 'bg-gray-500'} w-full h-60px flex items-center justify-center text-21px text-white`}>Buy now</button>
    )
}

export default BuyButton;