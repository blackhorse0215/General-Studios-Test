import {h, render} from 'preact';
import { useState, useEffect } from 'preact/hooks';
import FAQcontentItem from '../webcomponents/FAQpage/FAQcontentItem';

function FAQcontent(data){
    
    const [value, setValue] = useState([])

    useEffect(()=>{
        setValue(data.data)
    },[data])

    return(
        <div className="flex flex-col p-30px gap-40px max-md:pt-170px">
            {
                value.map((item, index)=>(
                    <FAQcontentItem datas={{topic:item.category, content:item.data}} />
                ))
            }
        </div>
    )
}

export default FAQcontent;