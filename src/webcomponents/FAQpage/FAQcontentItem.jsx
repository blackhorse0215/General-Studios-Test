import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import FAQcontentItemAnswer from './FAQcontentItemAnswer';

function FAQcontentItem({index}){

    const [answer, setAnswer] = useState([{id:''},{id:''},{id:''}])

    return (
        <div id="faq_content_item" className="flex flex-col">
            <h1 className="text-28px pb-40px border-b border-black border-solid max-md:text-19px max-md:pb-30px">Ordering</h1>
            <div className="flex flex-col">
                {
                    answer.map((item, index)=>(
                        <FAQcontentItemAnswer/>
                    ))
                }
            </div>
        </div>
    )
}

export default FAQcontentItem;