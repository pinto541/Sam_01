import React from 'react';
import { useRef } from 'react';
import './Contact.css';

import emailjs from '@emailjs/browser';



const Contact = () => {

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

export default Contact