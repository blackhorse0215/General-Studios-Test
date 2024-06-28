import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import FAQcontentItemAnswer from './FAQcontentItemAnswer';

function FAQcontentItem(data){

    const [topic, setTopic] = useState('')
    const [content, setContent] = useState([])

    useEffect(()=>{
        setTopic(data.datas?.topic)
        setContent(data.datas?.content)
    },[data])

    return (
        <div id="faq_content_item" className="flex flex-col">
            <h1 className="text-28px pb-40px border-b border-black border-solid max-md:text-19px max-md:pb-30px">{topic}</h1>
            <div className="flex flex-col">
                {
                    content.map((item, index)=>(
                        <FAQcontentItemAnswer value={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default FAQcontentItem;