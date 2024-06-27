import { h, render } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';
import MyContext from '../../context/Mycontext';

function ColorButton({color}){

    const {Mycontext, setMycontext} = useContext(MyContext)
    const [bustate, setBustate] = useState(false)

    const handleClick=()=>{
        setBustate(true)
        setMycontext({...Mycontext, HomeproColor:color})
    }

    useEffect(()=>{
        Mycontext.HomeproColor == color ? setBustate(true) : setBustate(false)
    },[Mycontext.HomeproColor])

    return (
        <span className={`w-5 h-5 flex justify-center items-center ${bustate == true ? 'border border-black border-solid':''} rounded-50%`}><button onClick={handleClick} className={`h-4 w-4 rounded-50%`} style={{backgroundColor:`${color.toLowerCase()}`}}></button></span>
    )
}

export default ColorButton;