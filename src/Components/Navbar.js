import React from 'react'
import Logo from "../assets/Logo.png"
import { NavLink } from "react-router-dom"
import "../Styles/Navbar.css"
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const Navigate = useNavigate()
  return (
    <div className='navbar'>
        <div className='leftside'>
        </div>
        <img src={Logo} onClick={() => {
          Navigate("/")
        }} />
        <div className='rightside'>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="mainpage"> MAIN </NavLink>
            <NavLink to="saleitems"> SALE </NavLink>
            <NavLink to="man"> MEN </NavLink>
            <NavLink to="women"> WOMEN </NavLink>
            <NavLink to="kids"> KIDS </NavLink>
            <NavLink to="sport"> SPORT </NavLink>
            <NavLink to="contact"> CONTACT </NavLink>
        </div>
        </div>
  )
}

export default Navbar
   