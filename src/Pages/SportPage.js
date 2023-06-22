import React from 'react'
import {sportList} from "../Lists/SportPageList"
import ProductItem from "../Components/SportPageItem"
import { useNavigate } from 'react-router-dom'
import "../Styles/SportPage.css"
import "../assets/BackgroundImage.jpg"

function SportPage() {
  const Navigate = useNavigate()
  return (
    <div className='Products'> 

      <div className='productTitle'>
      <h1>Women Selection</h1>
      </div>
      <div className='Item'>{sportList.map((Products) => (
        <ProductItem data={Products}/>
      ))}</div>
          <button className='backButtonWomen'
    onClick={() => {
      Navigate("/MainPage")
    }}
    >
      Back
    </button>
    </div>
  )
}

const BackgroundImage = () => {
  return (
    <div className='page-container'>
      {BackgroundImage}
    </div>
  )
}
export default SportPage
