import React from 'react';
import './Choose.css';



export const Choose = () => {
  return (
    <>
    <div>
        <br/>
        <br/>
     <h1 style={{textAlign:'center'}}>Why Cho<span style={{color:'green'}}>ose Us?</span></h1>
       <br/>
       <br/>

      <div className='c-all'>

        <div className='c12'>
         <h1 style={{color:'green'}}>Credibility</h1>
         <p style={{textAlign:'justify'}}>
         Credibility we have been consistently providing the highest standard of services to build a reputed name for ourselves
         </p>
          
        </div>

        <div className='c11'>
           <h1>Transparent</h1>
           <p style={{textAlign:'justify'}}>
           Transparent with information throughout and honest advise, we ensure our clients should be offered the best value and opportunity.
           </p>

        </div>

        <div className='c13'>
            <h1 style={{color:'green'}}>Customized</h1>
            <p style={{textAlign:'justify'}}>
            Customer focused with our business acumen, we share the best ideas to present a wide array of customized investment solutions making real estate transaction simple for you.
            </p>

        </div>
      </div>

    </div>
    </>
  )
}
