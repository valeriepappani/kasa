import '../styles/Error.scss'
import { Link } from 'react-router-dom'


function Error() {
    return (
        <div className="error">
            <h1 className="error__title">404</h1>
            <h2 className="error__subtitle">Oups! La page que <br className="break" />vous demandez n'existe pas.</h2>
            <Link to="/" className="navbar__logo">
                <p className="error__link">Retourner sur la page d'accueil</p>
            </Link>

        </div>
    )
}

export default Error