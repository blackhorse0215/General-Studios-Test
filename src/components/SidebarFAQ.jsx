import { h, render } from "preact";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import { fetchCartProducts } from "../utils/FetchCartProducts";
import MyContext from "../context/Mycontext";
import ShopCartIcon from "../webcomponents/Icons/ShopCartIcon";
import MenuIcon from "../webcomponents/Icons/MenuIcon";
import ScrollBarFAQ from "../webcomponents/Sidebar/SidebarFAQ";
import MenuBar from "../webcomponents/Sidebar/MenuBar";
import ProductCartBar from "../webcomponents/Sidebar/ProductCartBar";

function SidebarFAQ(){

    const {Mycontext, setMycontext} = useContext(MyContext);
    const [Cart, setCart] = useState([])

    const showContent=()=>{
        if(Mycontext.sidebarState == false){
            document.body.style.overflow = 'hidden'
        }
        else if(Mycontext.sidebarState == true && Mycontext.cartState == false){
            document.body.style.overflow = ''
        }
        Mycontext.sidebarState == false ? setMycontext({...Mycontext,sidebarState:true}) : setMycontext({...Mycontext, sidebarState:false})
    }

    const getCartProduct=()=>{
        try{
            fetchCartProducts(localStorage.getItem('checkoutID'))
            .then((res)=>{
                setCart(res)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        catch{
            console.log('error');
        }
    }

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

    const controlSicebar=()=>{
        document.body.style.overflow = ''
        Mycontext.sidebarState == true ? setMycontext({...Mycontext, sidebarState:false}) : null
        Mycontext.cartState == true? setMycontext({...Mycontext, cartState:false}) : null
    }

    useEffect(()=>{
        getCartProduct();
    },[Mycontext.getDataState, Mycontext.cartState])

    return (
        <>
            <div className="flex flex-col fixed h-full w-70px right-0 top-0 bg-black z-20 max-lg:h-70px max-lg:flex-row max-lg:w-full max-lg:justify-end">
                {
                    Cart ?
                        <div onClick={showCartContent} className="flex justify-center items-center w-70px h-70px">
                            <ShopCartIcon/>
                        </div> :<></>
                }
                <div onClick={showContent} className="flex justify-center items-center w-70px h-70px bg-gray-300 max-lg:bg-black">
                    <MenuIcon/>
                </div>
                <ScrollBarFAQ/>
                <MenuBar/>
                <ProductCartBar data={Cart} />
            </div>
            {
                Mycontext.sidebarState == true || Mycontext.cartState == true?
                <div onClick={controlSicebar} className="fixed w-full h-full z-10 top-0"></div>
                :
                <></>
            }
        </>
    )
}

export default SidebarFAQ;