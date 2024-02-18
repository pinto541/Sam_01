import React from 'react';
import './Client.css';

import img1 from '../../Assets/c4.png';
import img2 from '../../Assets/c2.png';
import img3 from '../../Assets/c3.jpeg';
import img4 from '../../Assets/c4.png';

const Client = () => {
  return (
    <>
    <br/>
    <br/>
    <div style={{backgroundColor:  '#F8F9FA' }}>
    <div className='c1'>
        <h1>Our <span style={{color:'green'}}>Clients</span></h1>

    </div>
    <br/>

    <div className='cimg-all'>
        <div className='imgc'>
            <img src={img1}/>
        </div>

        <div className='imgc'>
        <img src={img2}/>
            </div>

            <div className='imgc'>
            <img src={img3}/>
            </div>

            <div className='imgc'>
            <img src={img4}/>
            </div>
    </div>
    <br/>
    <br/>
    
    </div>
    <br/>

    </>
  )
}

export default Client