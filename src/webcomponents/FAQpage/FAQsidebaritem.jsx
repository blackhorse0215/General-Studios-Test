import { h, render } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';
import MyContext from '../../context/Mycontext';

function FAQsidebaritem({index}){
    
    const {Mycontext, setMycontext} = useContext(MyContext)

    const moveContent=()=>{
        const divs = document.querySelectorAll('#faq_content_item');
        divs.forEach((item, indexitem)=>{
            if(index == indexitem){
                item.scrollIntoView({behavior:'smooth'})
            }
        })
    }

    return (
        <span onClick={moveContent} className="flex gap-20px cursor-pointer"><p className={`${Mycontext.faqCurrent == index ? 'bg-black text-white' : ''} border border-solid rounded-50% border-black flex justify-center w-25px h-25px`}>{index + 1}</p><p>Refunds & Exchanges</p></span>
    )
}

export default FAQsidebaritem;