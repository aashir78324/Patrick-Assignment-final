import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/MainPage.css"
import MainWomenPicture from "../assets/MainPageWomen.webp"
import MainManPicture from "../assets/MainPageMan.webp"
import MainKidsPicture from "../assets/MainPageKids.webp"
import MainSportPicture from "../assets/MainPageSport.webp"
import  ArrowRight  from "../assets/arrowRight.jpg"
function MainPage() {
  const Navigate = useNavigate()
  return (
    <div>
      <button className='womenButton'
      onClick={() => {
        Navigate("/women")
      }}
      >
        <p className='mainPageText'>Women</p>
      </button>

      <button className='manButton'
      onClick={() => {
        Navigate("/man")
      }}>
        <p className='mainPageText'>Men</p>
      </button>
      
      <button className='kidsButton'
      onClick={() => {
        Navigate("/kids")
      }}
      >
        <p className='mainPageText'>Kids</p>
      </button>

      <button className='sportButton'
      onClick={() => {
        Navigate("/sport")
      }}
      >
        <p className='mainPageText'>Sport</p>
      </button>

      <button className='saleButton'
      onClick={() => {
        Navigate("/saleitems")
      }}
      >
        <p className='mainPageText'>Sale</p>
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

    <div className='ArrowRight'>
      <img src={ArrowRight} />
    </div>

    </div>
  )
}

export default MainPage
