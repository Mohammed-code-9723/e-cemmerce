import React from 'react';
import {sunglasses} from './SunglassesData';
import SunglassesCard from './SunglassesCard';
export default function Sunglasses(props) {
  return (
    <div className='wCont'>
      {sunglasses.map((item, index) => (
        <SunglassesCard key={index} item={item} selectedItems={props.selectedItems} />
      ))}
    </div>
  );
}