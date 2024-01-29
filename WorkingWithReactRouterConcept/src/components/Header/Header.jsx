import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../common.css'
import './Header.css'

import logo from '../../images/logo.png'


const Header = ({headerItems, buttons}) => {
  return (
    <header>
        <div className="container-fluid bg-light-purple p-2">
          <div className="header-container row align-items-center">
            <Link to='/' className="col-md-4 navbar-brand">
              <img src={logo} alt="logo" className='logo'/>
            </Link>

            <div className="col-md-5 menuContainer">
              <ul className="navbar-nav flex-row">
                {
                headerItems.map((headerItem, index) => (
                  <li key={index} className="nav-item">
                    <NavLink 
                      to={headerItem.to} 
                      className={({isActive}) => 
                        `${isActive ? "text-purple" : "text-white"} nav-link text-decoration-none fw-bold ls-1 mx-5`}>
                      {headerItem.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-3 btn">
              {
                buttons.map((button, index) => (
                  <Link to={button.to} className={button.className}  key={index} >
                    {button.text}
                  </Link>
                ))
              }
            </div>
          </div>
         
        </div>
    </header>
    
  )
}

export default Header
