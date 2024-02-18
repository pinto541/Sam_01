import {React,useEffect} from 'react';
import './Service1.css';
import img01 from '../../Assets/c14.jpeg'
import img02 from '../../Assets/c19.jpeg'
import img0001 from '../../Assets/c13.jpeg'

const Service1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        
      
       <div className='s-title'>
       <h1>Our Services</h1>
       </div>


    <div className='s-container'>
        <div className='left'>
             <div className='left1'>
                <img src={img0001}/>
                <h1>Residential Real Estate</h1>
                <hr className='s-hr'/>
                <br/>
                <h4>Whether youre buying, selling, or renting a home, our seasoned real estate
professionals are here to guide you through every step of the process. We ensure that
your residential real estate transactions are smooth, efficient, and tailored to your
specific requirements.</h4>
             </div>
   
<br/>
<br/>

             <div className='left1'>
             <img src={img0001}/>
                <h1>Investment Consultation:</h1>
                <hr className='s-hr'/>
                <br/>
                
                <h4>Looking to invest in real estate? Our experienced consultants provide in-depth market
analyses and investment strategies tailored to your financial goals. Whether it's
residential properties, commercial spaces, or real estate portfolios, we help you make
informed decisions for long-term success.</h4>
             </div>
             <br/>
             <br/>
             <div className='left1'>
             <img src={img0001}/>
                        <h1>Real Estate Development</h1>
                        <hr className='s-hr'/>
                        <br/>
                        
                        <h4>As a full-service real estate company, we engage in real estate development projects.
From conceptualization to construction management, we bring a wealth of experience
to the table, ensuring the successful realization of your development goals.</h4>
                    </div>
<br/>
<br/>
                    <div className='left1'>
                    <img src={img0001}/>
                        <h1>Market Insights and Advisory</h1>
                        <hr className='s-hr'/>
                        <br/>
                        
                        <h4>Our integrated platform provides clients with market insights and advisory services.
Stay informed with the latest trends, investment opportunities, and regulatory changes
that may impact your real estate decisions.</h4>
                    </div>
                    
        </div>


        <div className='middle'>
            <div className='mid1'>
            <img src={img0001}/>
                        <h1>Guest House Management</h1>
                        <hr className='s-hr'/>
                        <br/>
                        <h4>We Are One Of The Leading hospitality &Facility Management Companies In India. All Credit Goes To Young, Dynamic & Determined Team Members. We are more focused on internally promoting our staff based on talent to motivate them, resulting in higher retention rate and more loyal staff, thus increase in happy clients.. <br/>program</h4>
                    </div>

                    <div className='mid1'>
            <img src={img0001}/>
                        <h1>Guest House Management</h1>
                        <hr className='s-hr'/>
                        <br/>
                        <h4>We Are One Of The Leading hospitality &Facility Management Companies In India. All Credit Goes To Young, Dynamic & Determined Team Members. We are more focused on internally promoting our staff based on talent to motivate them, resulting in higher retention rate and more loyal staff, thus increase in happy clients.. <br/>program</h4>
                    </div>
            </div>
        

        <div className='right'>
                <div className='right1'>
                <img src={img0001}/>
                        <h1>Guest House Management</h1>
                        <hr className='s-hr'/>
                        <br/>
                        <h4>We Are One Of The Leading hospitality &Facility Management Companies In India. All Credit Goes To Young, Dynamic & Determined Team Members. We are more focused on internally promoting our staff based on talent to motivate them, resulting in higher retention rate and more loyal staff, thus increase in happy clients.. <br/>program</h4>
                    </div>
<br/>
<br/>
                    <div className='right1'>
                    <img src={img0001}/>
                        <h1>Commercial Real Estate</h1>
                        <hr className='s-hr' />
                        
                        <br/>
                        <h4>For businesses seeking the perfect space, we offer a comprehensive suite of services
in commercial real estate. From locating strategic commercial properties to

negotiating leases and sales, we are committed to helping your business thrive in the
right environment.</h4>
                    </div>
                    <br/>
                    <br/>
                    <div className='right1'>
                    <img src={img0001}/>
                        <h1>Property Management</h1>
                        <hr className='s-hr' />
                        <br/>
                        
                        <h4>Our property management services go beyond the transaction. We specialize in
managing residential and commercial properties, ensuring that your investments are
not only secure but also optimized for growth. From tenant screening to maintenance
coordination, we handle the details so you can enjoy the benefits of property
ownership.</h4>
<br/>
                    </div>
                    <div className='right1'>
                    <img src={img0001}/>
                        <h1>Relocation Services</h1>
                        <hr className='s-hr' />
                        <br/>
                        
                        <h4>Moving to a new area? Our relocation services assist individuals and families in
finding the perfect home in their new location. We understand the unique challenges
of relocation and provide comprehensive support to ease the transition.</h4>
                    </div>
                    <br/>
                    <br/>
                    <div className='right1'>
                    <img src={img0001}/>
                        <h1>Industrial Land & Warehouse Services</h1>
                        <hr className='s-hr' />
                        <br/>
                        <h4>Planning to have a government Industrial land at lesser price in major premier areas in
Karnataka. We assist you right from Project Plan, Applications for Land, Allotment &amp; getting
PC.</h4>
                    </div>
        </div>
        </div>
    </>
  )
}

export default Service1