import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

function FAQcontentItemAnswer(data){

    const [quetion, setQuetion] = useState('')
    const [answer, setAnswer] = useState([])
    const [answerState, setAnswerState] = useState(true)

    const show=()=>{
        answerState ==false ? setAnswerState(true) : setAnswerState(false);
    }

    useEffect(()=>{
        const qu = data.value?.question;
        setAnswer(data.value?.answer);
        setQuetion(qu)
    },[data])

    return (
        <div className={`border-b border-solid border-black h-auto max-md:pt-5px  transition-all duration-500 ease`}>
            <h1 onClick={show} className="text-28px cursor-pointer max-md:text-19px hover:text-customGray mt-2px">{quetion}</h1>
            <div className={`${answerState == true ? "h-0 mt-0" : 'h-full mt-8'} overflow-hidden text-28px text-customGray mb-6px max-md:text-19px transition-all duration-500 ease`}>
                {
                    answer.map((item, index)=>(
                        <>
                            <p className='leading-9  transition-all duration-500 ease'>{item}</p><br />
                        </>
                    ))
                }
            </div>
        </div>    
    )
}

export default FAQcontentItemAnswer;