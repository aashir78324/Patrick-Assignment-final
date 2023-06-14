import React from 'react'
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
        </div>
        <img src={Logo} />
        <div className='rightside'>
            <Link to="/"> Home </Link>
            <Link to="mainpage"> MAIN </Link>
            <Link to="saleitems"> SALE </Link>
            <Link to="man"> MEN </Link>
            <Link to="women"> WOMEN </Link>
            <Link to="children"> CHILDREN </Link>
            <Link to="sport"> SPORT </Link>
            <Link to="contact"> CONTACT </Link>
        </div>

    </div>
  )
}

export default Navbar
