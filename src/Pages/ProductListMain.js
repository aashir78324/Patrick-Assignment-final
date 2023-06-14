import React from 'react'
import { SelectionList } from "../helpers/SelectionList"

function ProductList() {
  return (
    <div className='product'>
      <h1 className='mainPageTitle'>Our Selection</h1>
      <div className='selectionList'>{SelectionList.map((menuItem, key) => {
        return <div> {menuItem.name} </div>
      })}</div>
      </div>
  )
}

export default ProductList
