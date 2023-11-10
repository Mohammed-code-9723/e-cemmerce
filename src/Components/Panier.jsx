import React from 'react'
import '../Styles/Panier.css';
import { DeleteOutline } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Panier(props) {
    const removeItems=(t,p)=>{
        const updateListAchat=props.listA.filter((item)=>item.title!==t);
        props.setListA(updateListAchat);
        props.setTot((prev)=>prev-p);
    }
    return (
        <div className='panierContent'>
            <h2>TOTAL: {props.tot} DH</h2>
            <center>
                <Badge color='warning' badgeContent={props.listA.length}>
                    <ShoppingCartIcon /> 
                </Badge>&nbsp;&nbsp;&nbsp;
                You selected <strong>{props.listA.length}</strong> product{props.listA.length===1?'':"'s"}
            </center>
            {
                props.listA.map((item,index)=>{
                    return(
                        <div key={index} style={{textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <img className='picsPanier' src={item.thumbnail} alt={item.thumbnail} width={300}/>
                            <p>{item.title}</p>
                            <p ><strong>{item.price} DH</strong></p>
                            <button className='remove' onClick={()=>removeItems(item.title,item.price)}>Remove &nbsp;<DeleteOutline/></button>
                            <hr className='line'/>
                        </div>
                    )
                })
            }
        </div>
    )
}
