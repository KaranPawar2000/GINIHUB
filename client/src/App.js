
//Components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import {Box} from '@mui/material';
import DetailView from './components/details/DetailView';
import DataProvider from './context/DataProvider';               //by wrapping with data provider to apply all the states (usecontext)
import {BrowserRouter,Routes,Route} from 'react-router-dom';     //use to enable routing in our application
                                                                //Routes is used to select component where we want routing
                                                                //Route is used to select url path
function App() {
  return (
    <DataProvider> 
      <BrowserRouter>
       <Header />
       <Box style={{marginTop:54}}>
       <Routes>
       <Route path='/' element={<Home />} />

       <Route path='/product/:id'element ={<DetailView />} />
       <Route path='/cart' element= {<Cart/>}/>
       </Routes>
       </Box>
       </BrowserRouter>
    </DataProvider>
  );
}

export default App;
