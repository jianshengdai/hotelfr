import React,{useEffect} from 'react';
import './Intro.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Intro = () =>{

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return(
      <div className='contenedor2'>
        <h2 data-aos='fade-up' className='titleIntro'>Lodge perched on top of the world </h2>
        <div>
          <p data-aos='fade-up'>Cu nam labores lobortis definiebas, ei aliquyam salutatus persequeris quo, cum eu nemore fierent dissentiunt.
          Per vero dolor id, vide democritum scribentur eu vim,
          pri erroribus temporibus ex. Euismod molestie offendit has no.
          Quo te semper invidunt quaestio, per vituperatoribus sadipscing ei,
          partem aliquyam sensibus in cum.</p>
         <p data-aos='fade-up'>In mel saperet expetendis. Vitae urbanitas sadipscing nec ut,
         at vim quis lorem labitur.  vide democritum scribentur eu vim,
         pri erroribus temporibus ex. Euismod molestie offendit has no.
         Quo te semper invidunt quaestio, per vituperatoribus sadipscing ei,Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no.
         Nam et puto abhorreant scripserit, et cum inimicus accusamus.</p>
         <p data-aos='fade-up'>Est ei erat mucius quaeque. Ei his quas phaedrum,
         efficiantur mediocritatem ne sed,
         hinc oratio blandit ei sed. vide democritum scribentur eu vim,
         pri erroribus temporibus ex. Euismod molestie offendit has no.
         Quo te semper invidunt quaestio, per vituperatoribus sadipscing ei, vide democritum scribentur eu vim,
         pri erroribus temporibus ex. Euismod molestie offendit has no.
         Quo te semper invidunt quaestio, per vituperatoribus sadipscing ei, Blandit gloriatur eam et.
         Brute noluisse per et, verear disputando neglegentur at quo.
         Sea quem legere ei, unum soluta ne duo.
         Ludus complectitur quo te, ut vide autem homero pro.</p>
        </div>
        <div  className='space' data-aos='fade-up'>
          <a href="*"><span className='buttonContact'>Contact us</span></a>
        </div>
      </div>

  )
}

export default Intro;
