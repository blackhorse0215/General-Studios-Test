import { h, render } from 'preact';
import { useContext, useEffect, useRef } from 'preact/hooks';
import HomeCollection from '../components/HomeCollection';
import HomeProductList from '../components/HomeProductList';
import { FirstScroll } from '../script/FirstScroll';
import MyContext from '../context/Mycontext';
import '../index.css'

const {Mycontext, setMycontext} = useContext(MyContext)

useEffect(()=>{
  setMycontext({...Mycontext, sidebarState:false, cartState:false})
  document.body.style.overflow = ''
  FirstScroll()
},[])

const Home=()=>(
        <div className="w-full h-full flex flex-col">
            <HomeCollection />
            <HomeProductList />
        </div>
)

render(<Home/>, document.getElementById('preact-home'))