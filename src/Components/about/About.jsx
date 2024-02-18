import React from 'react';
import './About.css';
import about from '../../Assets/about.jpg'



const About = () => {
  return (
    <>
    <div className='a-all'>
        <div className='a-image'>
            <div className='g-container'></div>
            <img src={about} />

        </div>

        <div className='a-text'>
             <h1>About Us</h1>
             <p>
             NexInfra is your premier destination for comprehensive real estate solutions. We offer a
diverse range of services tailored to meet the unique needs of our clients. From residential to
commercial properties, our expert team is dedicated to helping you buy, sell, or rent with
confidence. Our services extend beyond transactions; we specialize in property management,
ensuring that your investments are not just secure but thriving. Whether you&#39;re a first-time
homebuyer, an experienced investor, or a business looking for the perfect commercial space,
Nexinfra is here to guide you every step of the way. With a commitment to integrity,
professionalism, and personalized service, we make your real estate journey a seamless and
rewarding experience. Whether it&#39;s finding the right commercial space, designing residential
projects, or optimizing your property portfolio, we&#39;re here to collaborate on your journey to
excellence.
                

             </p>
           
             <a href='/Contact'><button className='h-button'>Contact Us</button></a>
             
               <br/>
               <br/>
            
        </div>
    </div>
    </>
  )
}

export default About