import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { lastMonthOffers,thisMonthOffers } from './HomeData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';

export default function Home(props) {
  const [count,setCount]=useState(0);
  
    
  return (
    <div>
      <div className='container'>
        <Link to='/Watches' className='l'>
          <section className='wat'>
            <h2 className='tit'>ALL MENS WATCHES</h2>
            <p className='par'>Classic style meets modern design.</p>
            <img src="Desktop_shopallmens23.jpg" alt="" />
          </section>
        </Link>
        <Link to='/Jewelry' className='l'>
          <section className='jew'>
            <h2 className='tit'>ALL Jewelry</h2>
            <p className='par'>Our men's jewelry celebrates design stripped down to its essential elements with strong lines, simple geometry and modern materials.</p>
            <img src="Desktop_alljewelry2023.jpg" alt="" />
          </section>
        </Link>
        <Link to='Sunglasses' className='l'>
          <section className='sun'>
            <h2 className='tit'>ALL MENS Sunglasses</h2>
            <p className='par'>From retro to modern, find the perfect shades to match your spirit of adventure.</p>
            <img src="MensSunglassesDesktop.jpg" alt="" />
          </section>
        </Link>
      </div>
      <div className='offers'>
        <h1>Last month offers </h1>
        <div className='lastOffersCard'>
          {
            lastMonthOffers.map((item,index)=>{
              return(
                <div key={index}>
                  <Link to={`/Product/${item.title}`} className='link'>
                    <div key={index} className='card newCards'>
                      <img className='oI' src={item.thumbnail} alt={item.thumbnail} width={300}/>
                      <p className='paa'>{item.title}</p>
                      <p className='paa'><strong>{item.price} DH</strong></p>
                    </div>
                  </Link>
                  <p>
                    Quantité: <br />
                    <input type="number" onChange={(e)=>setCount(e.target.value)} max={200} min={1} placeholder='1 item'/>
                  </p>
                  <button className='add' onClick={()=>props.selectedItems(lastMonthOffers,item.title,count)}>ADD TO CARD &nbsp;<ShoppingBagOutlined/></button>
                  <p style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                    
                </p>
                </div>
              )
            })
          }
        </div>
        <h1>This month offers </h1>
        <div className='lastOffersCard'>
          {
            thisMonthOffers.map((item,index)=>{
              return(
                <div key={index}>
                  <Link to={`/Product/${item.title}`} className='link'>
                    <div key={index} className='card newCards'>
                      <img className='oI' src={item.thumbnail} alt={item.thumbnail} width={300}/>
                      <p className='paa'>{item.title}</p>
                      <p className='paa'><strong>{item.price} DH</strong></p>
                    </div>
                  </Link>
                  <p>
                    Quantité: <br />
                    <input type="number" onChange={(e)=>setCount(e.target.value)} max={200} min={1} placeholder='1 item'/>
                  </p>
                  <button className='add' onClick={()=>props.selectedItems(thisMonthOffers,item.title,count)}>ADD TO CARD &nbsp;<ShoppingBagOutlined/></button>
                  <p style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                    
                </p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="accordion-section">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What People Say About Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className='comments-section'>
            <div className='comment'>
              <Avatar src="avatar1.jpeg" alt="Avatar 1" />
              <p>Comment 1: Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='comment'>
              <Avatar src="avatar2.jpg" alt="Avatar 2" />
              <p>Comment 2: Consectetur adipiscing elit.</p>
            </div>
            {/* Add more comments with avatars using the Avatar component */}
          </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What We Can Do for You</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className='services-section'>
            <p>Service 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Service 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            {/* Add more services and descriptions */}
          </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Your Custom Section</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className='custom-section'>
            <p>This is your custom section. You can add any content you like here.</p>
            <ul>
              <li>Custom Item 1</li>
              <li>Custom Item 2</li>
              <li>Custom Item 3</li>
            </ul>
          </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="footer">
        <div className="logo">
          <a href="#home" ><img id='logo' src="/Cheap.png" alt="Cheap Shopping" width={100}/></a>
        </div>
        <ul>
          <li><Link to='/Watches' style={{color:props.theme?'white':'black',textDecoration:'none',fontSize:'20px'}}>Watches</Link></li>
          <li><Link to='/Jewelry' style={{color:props.theme?'white':'black',textDecoration:'none',fontSize:'20px'}}>Jewelry</Link></li>
          <li><Link to='/Sunglasses' style={{color:props.theme?'white':'black',textDecoration:'none',fontSize:'20px'}}>Sunglasses</Link></li>
        </ul>
        <ul>
          <li><Link to='/LogIn' style={{color:props.theme?'white':'black',textDecoration:'none',fontSize:'20px'}}>Log In</Link></li>
          <li><Link to='/ContactUs' style={{color:props.theme?'white':'black',textDecoration:'none',fontSize:'20px'}}>Contact Us</Link></li>
          <li><Link to='/donate' style={{color:props.theme?'white':'black',textDecoration:'none',fontSize:'20px'}}>Donate</Link></li>
        </ul>
      </div>
    </div>
  )
}
