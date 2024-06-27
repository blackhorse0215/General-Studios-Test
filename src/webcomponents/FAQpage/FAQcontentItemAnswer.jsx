import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

function FAQcontentItemAnswer(){

    const [answerState, setAnswerState] = useState(true)

    const show=()=>{
        answerState ==false ? setAnswerState(true) : setAnswerState(false);
    }

    return (
        <div className={`border-b border-solid border-black ${answerState == true ? "h-50px max-md:h-40px" : ''} overflow-hidden max-md:pt-5px`}>
            <h1 onClick={show} className="text-28px cursor-pointer max-md:text-19px">Consectetur tincidunt risus nunc lacus porttitor sapien sit.</h1>
            <div className="text-28px text-customGray mb-20px max-md:text-19px">
                For orders within the United States, we offer shipping either through the United States Postal Service (USPS) or FedEx for faster Express shipments. For the USPS, you may select either First Class Mail (3-5 business days) or Priority Mail (3 business days). You may also select FedEx 2-Day shipping or FedEx Overnight shipping.
            </div>
        </div>   
    )
}

export default FAQcontentItemAnswer;