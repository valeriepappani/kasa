import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Accueil</h1>
            <div>
                <Link to="/Location">Page de location</Link>
            </div>
        </div>
    )
}

export default Home