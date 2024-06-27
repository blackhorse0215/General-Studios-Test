import { h, render } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';
import MyContext from '../../context/Mycontext';

function FAQsidebaritem(data){

    const {Mycontext, setMycontext} = useContext(MyContext)

    const moveContent=()=>{
        const divs = document.querySelectorAll('#faq_content_item');
        divs.forEach((item, indexitem)=>{
            if(data.value.value == indexitem){
                item.scrollIntoView({behavior:'smooth'})
            }
        })
    }

    return (
        <span onClick={moveContent} className="flex gap-20px cursor-pointer"><p className={`${Mycontext.faqCurrent == data.value.value ? 'bg-black text-white' : ''} border border-solid rounded-50% border-black flex justify-center w-25px h-25px`}>{data.value.value + 1}</p><p>{data.value.id}</p></span>
    )
}

export default FAQsidebaritem;