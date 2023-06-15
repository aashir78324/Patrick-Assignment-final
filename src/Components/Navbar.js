import React from 'react'
import Logo from "../assets/Logo.png"
import { NavLink } from "react-router-dom"
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
        </div>
        <img src={Logo} />
        <div className='rightside'>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="mainpage"> MAIN </NavLink>
            <NavLink to="saleitems"> SALE </NavLink>
            <NavLink to="man"> MEN </NavLink>
            <NavLink to="women"> WOMEN </NavLink>
            <NavLink to="children"> CHILDREN </NavLink>
            <NavLink to="sport"> SPORT </NavLink>
            <NavLink to="contact"> CONTACT </NavLink>
        </div>
        <div> Hello World</div>

    </div>
  )
}

export default Navbar
