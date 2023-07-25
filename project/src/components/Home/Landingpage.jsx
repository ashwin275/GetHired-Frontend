import React from 'react'
import LandingPageTop from './LandingPageTop'
import Landingpage2 from './Landingpage2'
import Landingpage3 from './Landingpage3'
import Landingpage4 from './Landingpage4'
import Landingpage5 from './Landingpage5'

function Landingpage() {
  return (
    <div className='w-full  bg-white '>

      <div className='w-10/12 mx-auto  '>
      
        <Landingpage3/>
        <LandingPageTop/>
        <Landingpage4/>
        <Landingpage5/>
    
       


      </div>
      
      
    </div>
  )
}

export default Landingpage
