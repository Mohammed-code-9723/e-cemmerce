import React, { useState } from 'react';
import { watches } from './watchesData';
import { Link } from 'react-router-dom';
import '../Styles/Watches.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function WatchCard({ item, selectedItems }) {
  
  const [count,setCount]=useState(1);

    return (
        <div className='watc'>
            <Link to={`/Product/${item.title}`} className='link'>
                <div className='card'>
                <img className='pics' src={item.thumbnail} alt={item.thumbnail} width={300} />
                <p className='name'>{item.title}</p>
                <p className='price'>
                    <strong>{item.price} DH</strong>
                </p>
                </div>
            </Link>
            <p>
            Quantité: <br />
            <input
                style={{textAlign:'center'}}
                type='number'
                onChange={(e) => setCount(parseInt(e.target.value))} 
                max={200}
                min={1}
                value={count} 
            />
            </p>
            <button className='add' onClick={() => selectedItems(watches, item.title, count)}>
                ADD TO CART &nbsp;
                {count > 1 ? (
                <Badge color='warning' badgeContent={count}>
                    <ShoppingCartIcon />
                </Badge>
                ) : (
                <Badge color='warning'>
                    <ShoppingCartIcon />
                </Badge>
                )}
            </button>
        </div>
    );
}

