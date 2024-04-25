
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/index.scss'
import '../styles/Header.scss'
import Logo from '../assets/Kasa-logo.png'

function Header() {

  const location = useLocation();

  return (
    <nav className="navbar">
        <img src={Logo} alt='logo-kasa' className='navbar__logo' />
      <div className="Link">
      <Link to="/Accueil" className={`navbar__link ${location.pathname === '/Accueil' ? 'active' : ''}`}>
          ACCUEIL
        </Link>
        <Link to="/Propos" className={`navbar__link ${location.pathname === '/Propos' ? 'active' : ''}`}>
          À PROPOS
        </Link>
      </div>
    </nav>
  )
}


export default Header;