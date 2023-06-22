import React from 'react'
import { SaleList } from "../Lists/SalePageList.js"
import SalePage from "../Components/SalePageItem.js"
import "../Styles/SaleItems.css"
import { useNavigate } from 'react-router-dom'


function SaleItems() {
  const Navigate = useNavigate()
  return (
    <div className='Sales'>
      <div className='saleTitle'>
        <h1>Sale Items</h1>
      </div>
      <div className='ItemSale'>{SaleList.map((Sales) => (
        <SalePage data={Sales}/>
      ))}</div>
          <button className='backButtonSale'
           onClick={() => {
            Navigate("/MainPage")
           }}
           >
            Back
           </button>
    </div>
  )
}

export default SaleItems