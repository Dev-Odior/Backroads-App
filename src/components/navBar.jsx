import React from 'react'
import logo from '../images/logo.svg'
import PageLink from './PageLinks'
import SocialLinks from './socialLinks'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLink parentClass="nav-links" childClass="nav-link" />
        <SocialLinks parentClass="nav-icons" childClass="nav-icon" />
      </div>
    </nav>
  )
}

export default NavBar
