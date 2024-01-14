import { useState,useEffect } from "react";
import { InputBase,Box,styled, List, ListItem } from "@mui/material";
import { useSelector,useDispatch} from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
const SearchContainer =styled(Box)`
background:#fff;
width:30%;
border-radius: 2px;
margin-left: 10px; 
display:flex;
`
;
const InputSearchBas = styled(InputBase)`
padding-left:20px;
width:100%;
font-size: unset;
;`
const SearchIconWrapper= styled(Box)`
color:blue;
padding:5px;
display:flex; 
`
const ListWrapper= styled(List)`
position:absolute;
background: #FFFFFF;
color:#000;
margin-top: 36px;
`
const Search=() =>{

  const [text,setText] =useState('')

  const { products } =useSelector(state=>state.getProducts);
  const dispatch = useDispatch();

  useEffect(()=>{
       dispatch(getProducts())
  },[dispatch])
 
  const getText = (text) =>{            //text is entered by user
    setText(text);

  }
return (
    <SearchContainer>
      <InputSearchBas  
           placeholder='Search for products,brands and more'
           onChange={(e) => getText(e.target.value)}
           value={text}
      />
      <SearchIconWrapper>
        <SearchIcon /> 
      </SearchIconWrapper>
      {
        text &&                                     //if text has value in it
        <ListWrapper>
          {
            products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLocaleLowerCase())).map(product=>(
              <ListItem>
                <Link
                 to={`/product/${product.id}`}
                 onClick={() => setText('')}
                 style={{textDecoration:'none',color:'inherit'}}
                 > 
                {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SearchContainer>
)
}

export default Search;