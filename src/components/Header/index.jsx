import { Link } from 'react-router-dom'
import '../../styles/index.scss'
import '../../styles/Header.scss'
import Logo from '../../assets/Kasa-logo.png'

function Header() {
  return (
    <nav className="navbar">
      <img src={Logo} alt='logo-kasa' className='navbar__logo' />
      <div>
        <Link to="/" className="navbar__link">Accueil</Link>
        <Link to="/Propos" className="navbar__link">À propos</Link>
      </div>
    </nav>
  )
}

export default Header