import { h, render} from "preact"
import { useCallback, useContext, useEffect, useState } from "preact/hooks"
import MyContext from "../../context/Mycontext"

function ShowDetailsButton({id}){

    const {Mycontext, setMycontext} = useContext(MyContext)

    const showDetails=(e)=>{
        if(window.innerWidth > 1024){
            document.getElementById(`${id}`).scrollIntoView({behavior:'smooth'})
        }
        setTimeout(() => {
            Mycontext.HomeProductId == id ? setMycontext({...Mycontext, HomeProductId:'', HomeproColor:'', HomeproSize:'', buttonState:false}) : setMycontext({...Mycontext, HomeProductId:id, HomeproColor:'', HomeproSize:'', buttonState:false})
        }, 500);
    }

    return (
        <button onClick={showDetails} className="w-11 h-11 rounded-full bg-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="5" viewBox="0 0 21 5" fill="none" class="mx-auto">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#1E1E1E"></circle>
                <circle cx="10.5" cy="2.5" r="2.5" fill="#1E1E1E"></circle>
                <circle cx="18.5" cy="2.5" r="2.5" fill="#1E1E1E"></circle>
            </svg>
        </button>
    )
}

export default ShowDetailsButton;