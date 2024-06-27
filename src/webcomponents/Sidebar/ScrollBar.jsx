import { h, render } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';
import MyContext from '../../context/Mycontext';

function ScrollBar(){

    const {Mycontext, setMycontext} = useContext(MyContext)
    const [scrollTop, setScrollTop] = useState(0)

    useEffect(() => {

        const handleScroll = () => {
            const scroll = window.scrollY || document.documentElement.scrollTop
            setScrollTop(scroll * document.querySelector('#srcollTopBar').offsetHeight / (document.querySelector('#app').offsetHeight - window.innerHeight))
        };

        handleScroll()

        console.log(Mycontext.sidebarState);

        window.addEventListener('scroll', handleScroll);

      }, []);

    return(
        <div  className="grow pt-60px pb-100px max-lg:hidden">
            <div id="srcollTopBar" className="relative w-full h-full">
                <p style={{top:`${scrollTop}px`}} className={`absolute writing-vertical-rl uppercase text-white transform rotate-90 h-18px min-w-115px right-m-27px`}>Kinekt Design</p>
            </div>
        </div>
    )
}

export default ScrollBar;