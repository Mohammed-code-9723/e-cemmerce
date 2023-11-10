import React from 'react';
import {jewelry} from './JewelryData';
import JewelryCard from './JewelryCard';
export default function Jewelry(props) {
  return (
    <div className='wCont'>
      {jewelry.map((item, index) => (
        <JewelryCard key={index} item={item} selectedItems={props.selectedItems} />
      ))}
    </div>
  );
}
