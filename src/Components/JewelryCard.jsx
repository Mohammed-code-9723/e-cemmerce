import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { jewelry } from './JewelryData';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function JewelryCard({ item, selectedItems }) {
  const [count, setCount] = useState(1); // Initialize count to 1

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
          type='number'
          onChange={(e) => setCount(parseInt(e.target.value))} // Update count when input changes
          max={200}
          min={1}
          placeholder='1 item'
          value={count} // Bind the input value to the count
        />
      </p>
      <button className='add' onClick={() => selectedItems(jewelry, item.title, count)}>
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
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></p>
    </div>
  );
}
