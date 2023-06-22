import React from 'react'
import {sportList} from "../Lists/SportPageList"
import ProductItem from "../Components/ProductItem"
import { useNavigate } from 'react-router-dom'
import "../Styles/WomenPage.css"

function SportPage() {
  const Navigate = useNavigate()
  return (
    <div className='Products'> 

      <div className='productTitle'>
      <h1>Sport Selection</h1>
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
export default SportPage
