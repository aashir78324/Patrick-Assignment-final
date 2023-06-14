import React from 'react'
import Homepicture1 from "../assets/HomePicture1.webp"
import Homepicture2 from "../assets/HomepPicture2.png"
import Homepicture3 from "../assets/HomePicture3.webp"
import "../Styles/Home.css"
import { Navigate } from "react-router-dom"

function Home() {
  const [goToMainPage, setGoToMainPage] = React.useState(false)

  if (goToMainPage) {
    return <Navigate to="/MainPage" />
  }

  return (
    <>
    <div className='Homepagetitle'>
      <h1>SALE</h1>
    </div>

    <div className='show-picture-1'>
      <img src={Homepicture1} /> 
    </div>

    <div className='show-picture-2'>
      <img src={Homepicture2} />
    </div>

    <div className='show-picture-3'>
      <img src={Homepicture3} />
    </div>
    
    <div>
      <button className='goSopping'
      onClick={() => {
        setGoToMainPage(true)
      }}
      >
        {" "}
        Go Shopping
        </button>
    </div>
    </>
  )
}



export default Home;