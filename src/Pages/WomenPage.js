import React from 'react'
import {ProductList} from "../helpers/ProductList"
import ProductItem from "..//Components/ProductItem"
import "../Styles/WomenPage.css"

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

export default WomenPage
