import React from 'react'
import {ProductList} from "../Lists/WomenPageList"
import ProductItem from "../Components/ProductItem"
import { useNavigate } from 'react-router-dom'
import "../Styles/WomenPage.css"
import "../assets/BackgroundImage.jpg"

function WomenPage() {
  const Navigate = useNavigate()
  return (
    <div className='Products'> 

      <div className='productTitle'>
      <h1>Women Selection</h1>
      </div>
      <div className='Item'>{ProductList.map((Products) => (
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
export default WomenPage
