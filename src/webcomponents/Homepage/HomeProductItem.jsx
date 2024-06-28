import { h, render } from 'preact';
import { useEffect, useRef , useState, useContext} from 'preact/hooks';
import getSymbolFromCurrency from 'currency-symbol-map';

import ShowDetailsButton from './ShowDetailsButton';
import MyContext from '../../context/Mycontext';
import { getProductDetails } from '../../utils/shopify';
import ColorButton from './ColorButton';
import BuyButton from './BuyButton';

function HomeProductItem({id}){

    const {Mycontext, setMycontext} = useContext(MyContext)
    const [productDetails, setProductDetails] = useState({})
    const [Id, setId] = useState(null)
    
    const [Size, setSize] = useState([]);
    const [Color, setColor] = useState([]);
    const [array, setArray] = useState([]);
    const [showproductId, setProductId] = useState(false)
    const [video, setVideo] = useState('')
    const [avilable, setAvila] = useState(false)

    const showDetails=()=>{
        setMycontext({...Mycontext, HomeProductId:''}) 
    }

    useEffect(()=>{
        try{
            getProductDetails(id)
            .then((datas)=>{
                setProductDetails(datas)
                const vi = datas.media?datas.media.edges[0].node.sources.find(element=>element.format == "mp4")?.url:'';
                setVideo(vi);
                const color = [];
                const size = [];
                datas.variants?.edges.forEach(item => {
                    item.node.selectedOptions.forEach(e=>{
                        if(e.name == "Size"){
                            if(!size.includes(e.value)){
                                size.push(e.value)
                            }
                        }
                        else if(e.name == "Color"){
                            if(!color.includes(e.value)){
                                color.push(e.value)
                            }
                        }
                    })
                })
                setSize(size);
                setColor(color);
                datas.variants.edges.map((item)=>{
                    array.push({id:item.node.id, options:item.node.selectedOptions, availableForSale:item.node.availableForSale})
                })
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
        array.forEach((item, index)=>{
            var k = false;
            var l = false;
            item.options.map(e=>{
                if(e.name == 'Color' && e.value == `${Mycontext.HomeproColor}`){
                    k = true
                }
            })
            if(Size == [] && k == true){
                console.log(item.id);
                setId(item.id)
                console.log(item.id);
                console.log(item);
                if(item.availableForSale == true){
                    setMycontext({...Mycontext, buttonState:true})
                }
                else{
                    setMycontext({...Mycontext, buttonState:false})
                }
                return
            }
            else{
                item.options.map(e=>{
                    if(e.name == 'Size' && e.value == `${Mycontext.HomeproSize}`){
                        l = true
                    }
                })
            }
            if(k == true && l == true){
                setId(item.id)
                console.log(item.id);
                console.log(item);
                if(item.availableForSale == true){
                    setMycontext({...Mycontext, buttonState:true})
                }
                else{
                    setMycontext({...Mycontext, buttonState:false})
                }
                return;
            }
        })
    },[Mycontext.HomeproColor, Mycontext.HomeproSize])

    useEffect(()=>{
        if(window.innerWidth < 1024){
            Mycontext.HomeProductId == id ? setProductId(true) : setProductId(false)
        }
    },[Mycontext.HomeProductId])

    return (
        <div id={productDetails.id} className="w-full  min-h-dvh grid grid-cols-10 max-lg:flex max-lg:flex-col">
            {
                video != "" ?
                    <video onClick={showDetails} controls={false} autoPlay loop muted className={`${Mycontext.HomeProductId != id ? 'col-span-5' : 'col-span-1'} w-full h-full object-cover border-solid border border-black transition-all duration-200 ease max-lg:min-h-500px`} >
                        <source src={video} type="video/mp4" />
                    </video>
                    :
                    <></>
            }
            <div className={`${Mycontext.HomeProductId != id ? 'col-span-5' : 'col-span-9'} transition-all duration-200 ease flex overflow-hidden w-full h-full bg-white left-1/2 border-solid border border-black transition-all duration-200 ease max-lg:flex-col`}>
                <div className="p-8 min-w-[45vw-35] w-[45vw-35] text-3xl relative max-lg:w-full">
                    <h1 className="text-28px mb-20px">{productDetails.title}</h1>
                    <div dangerouslySetInnerHTML={{__html:productDetails.descriptionHtml}} className="text-customGray mb-30px"></div>
                    <ShowDetailsButton id={productDetails.id}/>
                </div>
                <div className={`relative flex-grow pl-100px pt-30px pr-30px max-lg:pl-30px max-lg:fixed max-lg:w-full max-lg:bg-gray-300 max-lg:z-20 max-lg:pb-100px ${showproductId  == false ? 'max-lg:bottom-m400px ' : 'max-lg:bottom-0px' }`}>
                    <div className="relative w-full top-0 lg:border-t lg:border-solid lg:border-black">
                        <p className='w-full h-60px border-b hidden border-black border-solid flex justify-between max-lg:flex'>
                            <span className='text-28px'>{productDetails.title}</span>   
                            <span onClick={()=>{setMycontext({...Mycontext,HomeProductId:''})}} className='flex items-end pb-20px'>Close</span>
                        </p>
                        <div className="flex justify-between h-45px items-center border-b border-black border-solid">
                            <div className="flex gap-20px">
                                <p className='flex items-center'>Size:</p>
                                <select className='bg-inherit' onChange={(e)=>{setMycontext({...Mycontext, HomeproSize:e.target.value})}} name="" id="">
                                    {
                                        Size? Size.map((item, index)=>(
                                            <option value={item}>{item}</option>
                                        ))
                                        :
                                        <></>
                                    }
                                </select>
                            </div>
                            <a href='/' className='underline'>View Size Chart</a>
                        </div>
                        <div className="flex w-full justify-between border-b border-black border-solid">
                            <div className="flex gap-20px h-45px flex items-center">
                                <p>Color:</p>
                                <div className="flex gap-10px">
                                    {
                                        Color.map((item, index)=>(
                                            <ColorButton color={item} />
                                        ))
                                    }
                                </div>
                            </div>
                            <p className="flex items-center">{productDetails.variants ? getSymbolFromCurrency(productDetails.variants.edges[0].node.price.currencyCode.toUpperCase()):''}{productDetails.variants ? productDetails.variants.edges[0].node.price.amount:''}</p>
                        </div>
                        <BuyButton id={Id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProductItem;