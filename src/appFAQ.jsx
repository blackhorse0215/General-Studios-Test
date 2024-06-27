import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks'
import Router from 'preact-router';
import { Link } from 'preact-router';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Sidebar from './components/Sidebar';
import MyContext from './context/Mycontext';
import {createCheckoutSession} from './utils/createCheckoutID'

export function AppFAQ() {

  const [Mycontext, setMycontext] = useState({HomeProductId:'', faqCurrent:1, HomeproColor:'', HomeproSize:'', sidebarState:false, cartState:false, getDataState:''})

  useEffect(()=>{
    createCheckoutSession();
  })

  return (
    <>
      <div className='w-20px h-20px fixed top-5 left-5 z-30'>
        <Link href="/">
          <svg className='w-full h-full max-lg:text-white' width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M177.814 184.091L149.183 200.647V233.773L263.733 300L292.364 283.443V250.33L177.814 184.091Z" fill="currentColor"></path>
            <path d="M33.2665 0L60.5455 16.6652V283.335L33.2665 300L6 283.335V16.6652L33.2665 0Z" fill="currentColor"></path>
            <path d="M263.949 0L121.899 85.2324V119.32L150.304 136.364L292.354 51.1313V17.0438L263.949 0Z" fill="currentColor"></path>
          </svg>
        </Link>
      </div>
      <MyContext.Provider value={{Mycontext, setMycontext}}>
        {/* <Router> */}
          {/* <Home /> */}
          <FAQ />
          {/* <NotFound default /> */}
          {/* <Redirect path="/" to="/home" /> */}
        {/* </Router> */}
        <Sidebar/>
      </MyContext.Provider>
    </>
  )
}
