import React from 'react';
import './Header.css';
import hotel4 from './icono.png';
const HeaderMain = ()=>{
  return(
    <div>
        <div className='viewport.header'>
        <h1>Hotel</h1>
        <span>Hostelfrancia</span>
        <div className='image_star'>
        <img  className='estrella' alt='estrella' src={hotel4}/>
        </div>
        </div>
    </div>
  );
}



export default HeaderMain;
