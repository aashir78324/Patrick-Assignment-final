import React from 'react'

function ProductItem({image, name, price }) {
  return (
    <div className='productItem'>
        <div style={{ backgroundImage: `url(£(image))` }}></div>
        <h1>{name}</h1>
        <h5>£{price}</h5>
      
    </div>
  )
}

export default ProductItem
