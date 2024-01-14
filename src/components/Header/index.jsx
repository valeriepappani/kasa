import { Link } from 'react-router-dom'
import '../../styles/index.scss'
import '../../styles/Header.scss'
import Logo from '../../assets/Kasa-logo.png'

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={Logo} alt='logo-kasa' className='navbar__logo' />
      </Link>
      <div>
        <Link to="/Accueil" className="navbar__link">ACCUEIL</Link>
        <Link to="/Propos" className="navbar__link">À PROPOS</Link>
      </div>
    </nav>
  )
}

export default Header