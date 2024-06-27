import {h, render} from 'preact';
import { useState, useEffect } from 'preact/hooks';
import FAQsidebaritem from '../webcomponents/FAQpage/FAQsidebaritem';

function FAQsidebar(){

    const [faqsidebaritem, setFaqsidebariten] = useState([{id:''}, {id:''}, {id:''}, {id:''}, {id:''}, {id:''}])
    const [state, setState] = useState(false)

    const showFAQSidebar=()=>{
        state == false ? setState(true) : setState(false)
    }

    return (
        <div className={`max-md:fixed max-md:w-full max-md:border-b max-md:border-solid max-md:border-black z-10 max-md:bg-white ${state == false ? 'max-md:h-70px':''} overflow-hidden max-md:top-70px h-auto`}>
            <div className="fixed flex flex-col gap-40px p-30px border-l border-black h-full min-h-dvh max-md:min-h-0 max-md:relative max-md:h-auto max-md:p-15px max-md:pl-30px">
                <h1 className="text-28px" onClick={showFAQSidebar}>FAQ</h1>
                <div className="flex flex-col gap-10px">
                    {
                        faqsidebaritem.map((item, index)=>(
                            <FAQsidebaritem index={index}  />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQsidebar;