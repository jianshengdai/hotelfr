import React from 'react';
import './Navigation.css'
import icon_call from './icon_call.svg';
import icon_menu from './icon_menu.svg';
const Navigation = () =>{

  return(

    <nav className='sticky-nav'>
      <div className='menu-start'>
          <div  className='fl w-5 tc  br2 ph1 mh2 mv4 icon_menu'>
            <a href="*"><img alt='logo' src={icon_menu}/></a>
          </div>
      </div>
      <div className='menu_rest'>
          <div className='fl tc  br2 ph1 mh2 mv4 icon_menu'>
          <p className=''><a href="*">FR</a></p>
          </div>

          <div className='fl tc  br2 ph1 mh2 mv4 icon_menu'>
          <a href="*"><img alt='logo' src={icon_call}/></a>
          </div>

          <div className='fl tc br2 ph1 mh2 mv4 icon_book'>
          <p><a href="*">Book Now</a></p>
          </div>
      </div>
    </nav>

  );
}

export default Navigation;
