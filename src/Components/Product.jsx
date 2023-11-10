import React,{useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import { watches } from './watchesData';
import { jewelry } from './JewelryData';
import { sunglasses } from './SunglassesData';
import '../Styles/Product.css';
import { ShoppingBagOutlined } from '@mui/icons-material';

export default function Product(props) {
  const [count,setCount]=useState(0);
    const {title}=useParams();
    const all=[watches,jewelry,sunglasses];
    let findProduct = null;
    let pro=[]; 
    all.forEach(category => {
        const product = category.find(item => item.title === title);
        if (product) {
            findProduct = product;
            pro=[...pro,findProduct];
        }
    });
  return (
    <div>
        <Link to='/Watches' className='ret' style={{color:props.theme?'white':'black'}}>Watches Page</Link>
        <Link to='/' className='ret' style={{color:props.theme?'white':'black'}}>Go home</Link>
        {findProduct ?
          (<div className='Product'>
              <div>
                  <img className='item'  src={findProduct.thumbnail} alt={findProduct.thumbnail} width={500}/>
                  <p >{findProduct.title}</p>
                  <p ><strong>{findProduct.price} DH</strong></p>
                  <p>
                    Quantité: <br />
                    <input type="number" onChange={(e)=>setCount(e.target.value)} max={200} min={1} placeholder='1 item'/>
                  </p>
                  <button className='add' onClick={()=>props.selectedItems(pro,findProduct.title,count)}>ADD TO CARD &nbsp;<ShoppingBagOutlined/></button>
              </div>
          </div>):(
            <p>Product not found 404 ! </p>
          )
        }
    </div>
  )
}
