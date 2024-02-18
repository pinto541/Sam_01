import React from 'react';
import { useRef } from 'react';
import './Contact2.css';


import social1 from '../../Assets/facebook.png';
import social2 from '../../Assets/twitter.png';
import social3 from '../../Assets/whatsapp.png';
import social4 from '../../Assets/instagram.png';

import emailjs from '@emailjs/browser';



const Contact2 = () => {

    const form = useRef();


    



    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ymb0zin', 'template_mlfxyxf', form.current, 'WQ1EiyuosIfZS_a54')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <>
    <div className='c-banner'>
        <h1>Contact Us</h1>
       </div>



       <div style={{backgroundColor:'rgb(248, 249, 250)'}} className='f1-all'>
     <div className='f-left'>
         
         
         
           <h4 style={{color:'green'}}>Address:</h4>
         <h6>#2/5, Dahlia Building, 3rd Floor,</h6>
         <h6> 80 Feet Road, RMV 2nd Stage,</h6>
         <h6>Bengaluru,karnataka  560094</h6>
         <br/>
         <h4 style={{color:'green'}}>Office Timimg:</h4>
         <h6>Open ⋅ Closes 6 pm</h6>
         <br/>
         <h4 style={{color:'green'}}>Phone no. :</h4>
         <h6>0804374520 ,<br/> 9538961761</h6>
         <br/>
         <h4 style={{color:'green'}}>Mail Id:</h4>
         <h6>info@nextinfra.com ,<br/> divya@nexinfra.com</h6>
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
            
     <iframe  className='map22' style={{width:'500px',height:'550px',padding:'30px',marginLeft:'170px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1269979359695!2d77.5766422!3d13.027583699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e1770bc3b5%3A0x589e70b090a9d1de!2sBioAgile%20Therapeutics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1707993806636!5m2!1sen!2sin" 
     
       
       >
        
      </iframe>
      </div>

      </div>
   
    <div className='co-all'>
       <div className='co1-all'>
        
       <form ref={form} onSubmit={sendEmail}>
       <h1 style={{color:'white',textAlign:'center'}}>Get In Touch With Us</h1>
            <div className="form-group">
              <label style={{color:'white'}}>Name</label>
              <input className="form-control  " type="text" name="user_name" />
            </div>
            <div style={{padding:"5px"}}></div>
            <div className="form-group">
              <label style={{color:'white'}}>Email</label>
              <input className="form-control form-control-sm" type="email" name="user_email" />
            </div>
            <div style={{padding:"5px"}}></div>
            <div className="form-group">
              <label style={{color:'white'}}>Message</label>
              <textarea className="form-control form-control-sm" name="message" />
            </div>
            <div style={{padding:"10px"}}></div>
            <div className="col-12 pt-3" >
              <input className="btn btn-primary" style={{width:"200px"}} type="submit" value="Send" />
            </div>
          </form>
       </div>
    </div>
    </>
  )
}

export default Contact2