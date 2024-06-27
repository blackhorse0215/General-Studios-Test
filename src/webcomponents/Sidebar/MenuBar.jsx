import { h, render } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';
import MyContext from '../../context/Mycontext';

function MenuBar(){

    const {Mycontext, setMycontext} = useContext(MyContext)

    const showContent=()=>{
        if(Mycontext.sidebarState == false){
            document.body.style.overflow = 'hidden'
        }
        else if(Mycontext.sidebarState == true && Mycontext.cartState == false){
            document.body.style.overflow = ''
        }
        Mycontext.sidebarState == false ? setMycontext({...Mycontext,sidebarState:true}) : setMycontext({...Mycontext, sidebarState:false})
    }

    return(
        <div className={`transform ${Mycontext.sidebarState == false ? `translate-x-70px max-lg:translate-x-100vw` : `translate-x-[50vw] max-lg:translate-x-0`} max-lg:w-full w-50vw flex flex-col justify-between p-30px fixed h-full top-0 bg-white border-solid border border-black transition-all duration-200 ease`}>
            <div>
                <div className="flex justify-between">
                    <p className="bg-black text-white text-28px w-52px mb-30px">Info</p>
                    <p onClick={showContent}>Close</p>
                </div>
                <div>
                    <p className="text-28px"><a href="/">Shop</a></p>
                    <p className="text-28px"><a href=''>Affliates</a></p>
                    <p className="text-28px"><a href="/pages/faq">FAQ</a></p>
                </div>
            </div>
            <div>
                <p className="text-28px">Sign up to our email newsletter</p>
            </div>
        </div>
    )
}

export default MenuBar;