import React from 'react';
import {watches} from './watchesData';
import WatchCard from './WatchCard';
import '../Styles/Watches.css';
export default function Watches(props) {
  return (
    <div className='wCont'>
      {watches.map((item, index) => (
        <WatchCard key={index} item={item} selectedItems={props.selectedItems} />
      ))}
    </div>
  );
}
