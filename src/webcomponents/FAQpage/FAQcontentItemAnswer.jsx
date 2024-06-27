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
        <div className={`border-b border-solid border-black ${answerState == true ? "h-50px max-md:h-40px" : ''} overflow-hidden max-md:pt-5px`}>
            <h1 onClick={show} className="text-28px cursor-pointer max-md:text-19px">{quetion}</h1>
            <div className="text-28px text-customGray mb-20px max-md:text-19px">
                {
                    answer.map((item, index)=>(
                        <>
                            <p className='leading-9'>{item}</p><br />
                        </>
                    ))
                }
            </div>
        </div>   
    )
}

export default FAQcontentItemAnswer;