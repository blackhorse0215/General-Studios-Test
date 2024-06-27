import {h, render} from 'preact';
import { useState, useEffect } from 'preact/hooks';
import FAQcontentItem from '../webcomponents/FAQpage/FAQcontentItem';

function FAQcontent(){
    
    const [faqlist, setFaqlist] = useState([{id:"1"}, {id:"2"}, {id:"3"}, {id:"4"}, {id:"5"}, {id:"6"}, {id:"7"}])

    return(
        <div className="flex flex-col p-30px gap-40px max-md:pt-170px">
            {
                faqlist.map((item, index)=>(
                    <FAQcontentItem index={index} />
                ))
            }
        </div>
    )
}

export default FAQcontent;