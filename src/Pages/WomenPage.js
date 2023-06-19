import React from 'react'
import {ProductList} from "../helpers/ProductList"
import ProductItem from "..//Components/ProductItem"
import "../Styles/WomenPage.css"

function WomenPage() {
  return (
    <div className='Products'>
      <h1 className='productsTitle'>Women Selection</h1>
      <div className='productList'>
        {ProductList.map((productItem,key) => {
        return(
         <ProductItem
         key={key}
          image={productItem.image} 
          name={productItem.name} 
          price={productItem.price} 
          />
        );
      })}</div>
    </div>
  )
}

export default WomenPage
