import React from 'react';
import headervideo from './headervideo.mp4';
import './Header.css';

const Header = ()=>{
  return(
    <div>
      <div className="dark-overlay">
        <video className='videoTag' autoPlay loop muted>
        <source src={headervideo} type='video/mp4' />
        </video>
      </div>
    </div>

  );
}
export default Header;
