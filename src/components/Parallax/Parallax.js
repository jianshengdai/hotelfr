import React,{useEffect} from 'react';
import './Parallax.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Parallax = () =>{

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return(
    <div>
      <div className='parallax'>
      </div>
      <div className='contenedor3'>
      Scroll Up and Down this page to see the parallax scrolling effect.
      T     his div is just here to enable scrolling.
      Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>

  </div>
  )
}

export default Parallax;
