import React from 'react'

export const ProductItem = (props) => {
  const {name, image, price} = props.data
  return <div className='product'>
    <div className='description'>
      <img src={image}/>
      <p>
        <b>{name}</b>
      </p>
      <p>
        £{price}
      </p>
    </div>
  </div>
}

export default ProductItem
