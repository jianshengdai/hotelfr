import React from 'react';
import headervideo from './headervideo.mp4';
import './Header.css';
import hotel4 from './icono.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
const Header = ()=>{
  return(
    <div>
      <div>
        <video className='videoTag' autoPlay loop muted>
        <source src={headervideo} type='video/mp4' />
        </video>
      </div>
      <div className='contenedor1'>
          <div className='viewport.header'>
          <Slide top>
            <div className='logo'>
              <img className='foto_logo' alt='logo' src={hotel4}/>
            </div>
          </Slide>
          <Fade>
            <h2>Something wonderfull is about happen <br/> in</h2>
            <br/><br/>
          </Fade>
            <span>Soleil d’eté</span>
          </div>

      </div>
    </div>

  );
}
export default Header;
