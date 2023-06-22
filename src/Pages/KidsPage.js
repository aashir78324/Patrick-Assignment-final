import React from 'react'
import {KidsList} from "../Lists/KidsPageList"
import ProductItem from "../Components/ProductItem"
import { useNavigate } from 'react-router-dom'
import "../Styles/WomenPage.css"


function KidsPage() {
  const Navigate = useNavigate()
  return (
    <div className='Products'> 

      <div className='productTitle'>
      <h1>Kids Selection</h1>
      </div>
      <div className='Item'>{KidsList.map((Products) => (
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


export default KidsPage
