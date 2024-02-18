import React from 'react'
import './Home.css'

import About from './about/About'
import Years from './years/Years'
import Mission from './mission/Mission'
import Strength from './strength/Strength'
import Client from './client/Client'
import { Choose } from './choose/Choose'
import Footer1 from './Footer1/Footer1'
import Header from './header/Header'
import Services from './Services/Services'
import Footer2 from './footer2/Footer2'
import Projects from './projects/Projects'
import Contact from './contacts/Contact'
import Team from './team/Team'



const Home = () => {
  return (
    <>
  
    <div className='ah'>
        <div className='intro'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
           
          
        <h1> 
        Comprehensive<br/><span className='hi' > Real Estate & Construction Solutions</span> 
              <div className='hb-all'>
                <a href='/About'> <button className='h-button'>Read More</button></a>
           <a  href='/Contact'>  <button className='h-button'>Contact Us</button></a>
            

            </div>
        </h1>
        </div>
        </div>
      
        <About/>
        <Client/>
        <br/>
        <Team/>
        <Projects/>
        <Services/>
        <Choose/>
        <Footer1/>
        <Contact/>
      
        
        </>
  )
}

export default Home