import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/MainPage.css"
import MainWomenPicture from "../assets/MainPageWomen.webp"
import MainManPicture from "../assets/MainPageMan.webp"
import MainKidsPicture from "../assets/MainPageKids.webp"
import MainSportPicture from "../assets/MainPageSport.png"


function MainPage() {
  const Navigate = useNavigate()
  return (
    <div>
      <button className='womenButton'
      onClick={() => {
        Navigate("/women")
      }}
      >
        Women
      </button>

      <button className='manButton'
      onClick={() => {
        Navigate("/man")
      }}>
        Men
      </button>
      
      <button className='kidsButton'
      onClick={() => {
        Navigate("/kids")
      }}
      >
        Kids
      </button>

      <button className='sportButton'
      onClick={() => {
        Navigate("/sport")
      }}
      >
        Sport
      </button>

    <div className='MainPageWomen'>
      <img src={MainWomenPicture} />
    </div>
    
    <div className='MainPageMan'>
      <img src={MainManPicture} />
    </div>

    <div className='MainPageKids'>
      <img src={MainKidsPicture} />
    </div>

    <div className='MainPageSport'>
      <img src={MainSportPicture} />
    </div>

    </div>
  )
}

export default MainPage
