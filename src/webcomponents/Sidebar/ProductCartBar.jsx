import { h, render } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';
import MyContext from '../../context/Mycontext';
import getSymbolFromCurrency from 'currency-symbol-map';
import Cartproduct from './Cartproduct';
import {createCheckoutUrl} from '../../utils/createCheckoutUrl'

function ProductCartBar(Cart){

    const {Mycontext, setMycontext}  = useContext(MyContext)
    const [totalPrice, setTotolPrice] = useState(0)
    const [checkUrl, setCheckurl] = useState('')

    const showCartContent=()=>{
        if(Mycontext.cartState == false){
            getCartProduct();
            document.body.style.overflow = 'hidden'
        }
        else if(Mycontext.sidebarState == false && Mycontext.cartState == true){
            document.body.style.overflow = ''
        }
        Mycontext.cartState == false ? setMycontext({...Mycontext, cartState:true}) : setMycontext({...Mycontext, cartState:false})
    }

    const toCheckout=()=>{
        try{
            createCheckoutUrl()
            .then((res)=>{
                // setCheckurl(res)
                window.location.replace(res)
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
        var to = 0;
        Cart.data.forEach((e)=>{
            var total = parseFloat(e.variant.priceV2.amount)
            to += total * parseInt(e.quantity)
        })
        setTotolPrice(to)
    },[Cart])

    return(
        <div className={`transform ${Mycontext.cartState == false ? `translate-x-70px max-lg:translate-x-100vw` : `translate-x-[50vw]  max-lg:translate-x-0`} overflow-auto max-lg:w-full w-50vw flex flex-col justify-between p-30px fixed h-full top-0 bg-white border-solid border border-black transition-all duration-200 ease`}>
            <div className="flex flex-col w-full">
                <div className="flex justify-between border-b border-solid border-black pb-10px">
                    <h1 className="text-28px">Cart</h1>
                    <p onClick={showCartContent} className="cursor-pointer flex items-end">close</p>
                </div>
                <div className="p-5 flex flex-col pt-0 max-lg:p-0">
                    {
                        Cart.data.map((item, inndex)=>(
                            <Cartproduct data={item}  />
                        ))
                    }
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-40px justify-end pr-30px mb-30px">
                        <p>Total :</p>
                        <p>{getSymbolFromCurrency(Cart.data?Cart.data[0]?.variant.priceV2.currencyCode.toUpperCase():'')} {totalPrice}</p>
                    </div>
                    <div className="flex gap-20px">
                        <input type="text" className="w-full border-b border-solid border-black focus:outline-none" />
                        <p>Submit</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-20px">
                <button onClick={toCheckout} className="h-60px w-full bg-black flex justify-center items-center text-28px text-white">Procced to checkout</button>
                <button onClick={showCartContent} className="h-60px w-full bg-white text-28px">Contiue shipping</button>
            </div>
        </div>
    )
}

export default ProductCartBar;