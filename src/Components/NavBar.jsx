import React,{useState} from 'react';
import { NavLink} from 'react-router-dom';
import '../Styles/NavBar.css';
import { ArrowDownwardOutlined } from '@mui/icons-material';
import { ArrowUpwardOutlined } from '@mui/icons-material';
import {GiWatch} from 'react-icons/gi';
import {GiBigDiamondRing} from 'react-icons/gi';
import {GiSunglasses} from 'react-icons/gi';
import { ContactPage } from '@mui/icons-material';
import {CiLogin} from 'react-icons/ci';
import {CiHome} from 'react-icons/ci';

export default function NavBar(props) {
    const [opened,setOpened]=useState(true);
  return (
    <div>
        <div className={`navbar `} style={{display:opened?'flex':'none',color:props.theme?'white':'black'}}>
            <div className="logo">
                <a href="#home" ><img id='logo' src="/Cheap.png" alt="Cheap Shopping" width={100}/></a>
            </div>
            <NavLink to='/' className={`links `} style={{color:props.theme?'white':'black'}}>
                <span><CiHome size={25}/>Home</span>
            </NavLink>
            <NavLink to="/Watches" className={`links`} style={{color:props.theme?'white':'black'}}><GiWatch size={25}/>Watches</NavLink>
            <NavLink to="/Jewelry" className={`links `} style={{color:props.theme?'white':'black'}}><GiBigDiamondRing size={25}/>Jewelry</NavLink>
            <NavLink to="/Sunglasses" className={`links `} style={{color:props.theme?'white':'black'}}><GiSunglasses size={25}/>Sunglasses</NavLink>
            <NavLink to='/LogIn' className={`links `} style={{color:props.theme?'white':'black'}}>
                <span><CiLogin size={25}/>Log In</span>
            </NavLink>
            <NavLink to='/ContactUs' className={`links `} style={{color:props.theme?'white':'black'}}>
                <span><ContactPage />Contact us</span>
            </NavLink>
        </div>
        <span id='closeNav' onClick={()=>setOpened(!opened)}>{opened?<ArrowUpwardOutlined/>:<ArrowDownwardOutlined/>}</span>
    </div>
  )
}
