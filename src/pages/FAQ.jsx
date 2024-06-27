import { h, render } from 'preact';
import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import FAQsidebar from '../components/FAQsidebar';
import FAQcontent from '../components/FAQcontent';
import MyContext from '../context/Mycontext';
import { FirstScroll } from '../script/FirstScroll';
import {fetchFAQPageContent} from '../utils/getFAQConternt'
import '../index.css'

function FAQ(){

    const {Mycontext, setMycontext} = useContext(MyContext)
    const [data, setData] = useState([])

    useEffect(()=>{
      setMycontext({...Mycontext, sidebarState:false, cartState:false})
      document.body.style.overflow = ''
      FirstScroll()
      try{
        fetchFAQPageContent('faq')
        .then((data)=>{
          setData(JSON.parse(data.data.pageByHandle.metafields[0].value))
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      catch{
        console.log('error');
      }
    },[])

    useEffect(()=>{
        document.addEventListener('scroll', function() {
            const divs = document.querySelectorAll('#faq_content_item');

            divs.forEach((div, index) => {
              const rect = div.getBoundingClientRect();
              
              if (rect.top > -50 && rect.top < 50) {
                // Mycontext.faqCurrent != index ?
                setMycontext({...Mycontext, faqCurrent: index, cartState:false, sidebarState:false})
                // :
                // null
              }
            });
          });
    },[])

    return (
        <div className="grid grid-cols-10 h-full pr-70px max-lg:grid-cols-2 max-md:pr-0">
            <div className="col-span-1 max-lg:col-span-0"></div>
            <div className="grid grid-cols-custom col-span-9 max-lg:col-span-2 max-md:block max-md:w-full">
                <FAQsidebar data={data} />
                <FAQcontent data={data} />
            </div>
        </div>
    )
}

export default FAQ;