import React from 'react';
import './Footer1.css';

import social1 from '../../Assets/facebook.png';
import social2 from '../../Assets/twitter.png';
import social3 from '../../Assets/whatsapp.png';
import social4 from '../../Assets/instagram.png';
import logo1 from '../../Assets/c1.jpeg';

const Footer1 = () => {
  return (
    <>
    <div className='f1-all'>
     <div className='f-left'>
         
         <div className='logo1'>
            <img src={logo1}/>
         </div>
         <br/>

         <h4 style={{color:'green'}}>Address:</h4>
         <h6>#2/5, Dahlia Building, 3rd Floor,</h6>
         <h6> 80 Feet Road, RMV 2nd Stage,</h6>
         <h6>Bengaluru,karnataka  560094</h6>
         <br/>
         <h4 style={{color:'green'}}>Office Timimg:</h4>
         <h6>Open ⋅ Closes 6 pm</h6>
         <br/>
         <h4 style={{color:'green'}}>Phone no. :</h4>
         <h6> 0804374520 ,<br/> 9538961761</h6>
         <br/>
         <h4 style={{color:'green'}}>Mail Id:</h4>
         <h6> info@nextinfra.com ,<br/> divya@nexinfra.com</h6>
         <br/>
         <br/>
        <div className='social-all'>
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
        <br/>
         
     </div>

     <div className='f-right'>
            
     <iframe  className='map22' style={{width:'500px',height:'550px',padding:'20px',marginLeft:'180px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1269979359695!2d77.5766422!3d13.027583699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e1770bc3b5%3A0x589e70b090a9d1de!2sBioAgile%20Therapeutics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1707993806636!5m2!1sen!2sin" 
     
       
       >
        
      </iframe>
      </div>

      </div>
   

     

    </>
  )
}

export default Footer1