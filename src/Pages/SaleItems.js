import React from 'react'
import { SaleList } from "../helpers/SalePageList.js"
import SalePage from "../Components/SalePageItem.js"

function SaleItems() {
  return (
    <div className='Sales'>
      <div className='saleTitle'>
        <h1>Sale Items</h1>
      </div>
      <div className='ItemSale'>{SaleList.map((Sales) => (
        <SalePage data={Sales}/>
      ))}</div>
    </div>
  )
}

export default SaleItems