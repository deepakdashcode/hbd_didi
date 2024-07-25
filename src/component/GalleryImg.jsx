import React from 'react';
import './designGallery.css';
import pot1 from '../images/pot1.png';
import pot2 from '../images/pot2.jpg';
import pot3 from '../images/pot3.png';
import pot4 from '../images/pot4.jpg';
import pot5 from '../images/pot5.jpg';
import pot6 from '../images/pot6.jpg';
import land1 from '../images/land1.png';
import land2 from '../images/land2.jpg';
import land3 from '../images/land3.jpg';



export default function GalleryImg() {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-slate-900'>
      <div className='gallery-grid'>
        <div className='gallery-item'>
          <img src={pot1} alt="Gallery Item 1" />
        </div>
        <div className='gallery-item span-col-2'>
          <img src={land1} alt="Gallery Item 2" />
        </div>
        <div className='gallery-item'>
          <img src={pot2} alt="Gallery Item 3" />
        </div>
        <div className='gallery-item span-col-2'>
          <img src={land2} alt="Gallery Item 4" />
        </div>
        <div className='gallery-item'>
          <img src={pot3} alt="Gallery Item 5" />
        </div>
        <div className='gallery-item'>
          <img src={pot4} alt="Gallery Item 6" />
        </div>
        <div className='gallery-item'>
          <img src={pot5} alt="Gallery Item 7" />
        </div>
        <div className='gallery-item'>
          <img src={pot6} alt="Gallery Item 8" />
        </div>
        <div className='gallery-item span-col-2'>
          <img src={land3} alt="Gallery Item 9" />
        </div>
      </div>
    </div>
  );
}

