import React from 'react'
import {ProductList} from "../helpers/ProductList"
import ProductItem from "..//Components/ProductItem"
import "../Styles/WomenPage.css"
import "../assets/BackgroundImage.jpg"

function WomenPage() {
  return (
    <div className='Products'> 
      <div className='productTitle'>
      <h1>Women Selection</h1>
      </div>
      <div className='Item'>{ProductList.map((Products) => (
        <ProductItem data={Products}/>
      ))}</div>

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
