import React from 'react';
import './Footer.css';


import social1 from '../../Assets/facebook.png';
import social2 from '../../Assets/twitter.png';
import social3 from '../../Assets/whatsapp.png';
import social4 from '../../Assets/instagram.png';

const Footer2 = () => {
  return (
    <>
    <div className='f2-all'>
    <div className='social1-all'>
        <a>
            <div classname='social'>
                 <img style={{width:'50px',paddingLeft:'8px'}}  src={social1}/>
            </div>
         </a>
         <a>
            <div classname='social'>
            <img style={{width:'50px',paddingLeft:'8px'}} src={social2}/>
                
            </div>
         </a>
         <a>
            <div classname='social'>
            <img style={{width:'50px',paddingLeft:'8px'}}  src={social3}/>
            </div>
         </a>
         <a>
            <div classname='social'>
            <img style={{width:'50px',paddingLeft:'8px'}}  src={social4}/>
            </div>
         </a>

        </div>
        <div className='rights1'>
            <h4>© 2024 Teciex Solutions.</h4>
        </div>
    </div>
    </>
  )
}

export default Footer2