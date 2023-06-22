import React from 'react'
import { ManList } from '../helpers/ManPageList'
import ManItems from "../Components/ManPageItem"
import "../Styles/ManPage.css"

function ManPage() {
  return (
    <div className='manPage'>
      <div className='manTitle'>
        <h1>Man Page</h1>
      </div>
      <div className='manItem'>{ManList.map((ManPage) => (
        <ManItems data={ManPage}/>
      ))}</div>
    </div>
  )
}

export default ManPage
