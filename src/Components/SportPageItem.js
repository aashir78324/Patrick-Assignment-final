import React from 'react'

export const SportPage = (props) => {
  const {name, image, price} = props.data
  return <div className='product'>
    <div className='sportDescription'>
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

export default SportPage
