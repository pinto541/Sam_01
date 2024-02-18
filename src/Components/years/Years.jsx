import React from 'react';
import './Years.css';
import image1 from '../../Assets/2.png'
import image2 from '../../Assets/2.png'
import image3 from '../../Assets/2.png'



const Years = () => {
  return (
    <>
    <div className='y-all'> 
     <h1>Our Many Years Of Experience</h1>
     <div className='horizontal-line'></div>
     <p style={{color:'grey'}}>
     We have experienced the challenges, complex transaction, Right Locations, Complexity Deals structure on time meetings, provide up to date information. Therefore we are now matured enough with our experience, knowledge, energetic, passion towards real estate to conclude any level size of transactions. We are stepping via our past experiences towards the new era in the field of real estate. Team Maple Realtors have that passion, uniqueness, and resources to understand the core value of every transactions.

     </p>

     <div className='yimg-all'>
        <div className='y-img'>
           <img src={image1} />
           <h1>130+</h1>
           <h3>Upgrade To Bigger Places</h3>
        </div>
        <div className='y-img'>
        <img src={image2} />
        <h1>130+</h1>
           <h3>Upgrade To Bigger Places</h3>
        </div>
        <div className='y-img'>
        <img src={image3} />
        <h1>130+</h1>
           <h3>Upgrade To Bigger Places</h3>
        </div>
     </div>

    </div>
    </>
  )
}

export default Years