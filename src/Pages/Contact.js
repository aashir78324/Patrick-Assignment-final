import React from 'react'
import contactImage1 from "../assets/image 17.png"
import contactImage2 from "../assets/image 18.png"
import "../Styles/Contact.css"

function AboutPage() {
  return (
    <div>
      <h1>CONTACT DETAILS</h1>
      <div className="greyBox">
      </div>
      <div className='blackBox'>
        <img className='instagramIcon' src={contactImage1} />
        <img className='emailIcon' src={contactImage2} />
        <p>-Social and email contact will be responded to within 24 working hours 
          -Our Customer Service opening hours are: 
          -Mon to Fri - 8am - 6:30pm & Saturday 8:30am - 4:30pm</p>
      </div>
    </div>
  )
}

export default AboutPage
