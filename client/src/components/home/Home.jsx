import { useEffect } from 'react';

//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import{styled,Box} from '@mui/material';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch,useSelector } from 'react-redux';
const Component =styled(Box)`
padding:20px 10px;
background: #F2F2F2;
`
const Home =() => {
  
    const {products} = useSelector(state => state.getProducts)                     //object distructuring concept
                                console.log(products);                             //use selector used to get data from redux store
                                
   const dispatch =useDispatch();
    useEffect(()=>{                      //with the help of useEffect we render getProduct function at the time of website loading
        dispatch(getProducts())         //place getProducts() function in dispatch otherwise its value from productActions.js becomes undefined

    },[dispatch]) 
   
    return(
        <>
       <NavBar />
       <Component>      
       <Banner />
       <MidSlide products={products} title ="Deal of the Day" timer={true} /> 
       <MidSection />
       <Slide products={products} title ="Discounts for You" timer={false}/>
       <Slide products={products} title ="Suggesting Items" timer={false}/>
       <Slide products={products} title ="Top Selections" timer={false}/>
       <Slide products={products} title ="Recomended items" timer={false}/>
       <Slide products={products} title ="Trending Offers"  timer={false}/>
       <Slide products={products} title ="Season's top Picks" timer={false}/>  
       <Slide products={products} title ="Top Deals on Accessories" timer={false}/> 
       </Component>
       </>
    )
}

export default Home;