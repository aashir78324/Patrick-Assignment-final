import React from 'react'
import { ManList } from '../Lists/ManPageList'
import ManItems from "../Components/ManPageItem"
import "../Styles/ManPage.css"
import { useNavigate } from 'react-router-dom'


function ManPage() {
  const Navigate = useNavigate()
  return (
    <div className='manPage'>
      <div className='manTitle'>
        <h1>Man Page</h1>
      </div>
      <div className='manItem'>{ManList.map((ManPage) => (
        <ManItems data={ManPage}/>
      ))}</div>
                <button className='backButtonMan'
    onClick={() => {
      Navigate("/MainPage")
    }}
    >
      Back
    </button>
    </div>
  )
}

export default ManPage
