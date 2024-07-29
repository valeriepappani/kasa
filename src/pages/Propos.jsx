import Collapse from '../components/collapse';
import BannerPropos from '../components/BannerPropos';

function Propos() {

    return (
        <div>
            <BannerPropos />
            <div className="Collapses">
                <Collapse
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
                    differentclass="propos-collapse" />
                <Collapse
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme." 
                    differentclass="propos-collapse" />
                    
                <Collapse
                    title="Services"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme." 
                    differentclass="propos-collapse"/>
                <Collapse
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                    également des ateliers sur la sécurité domestique pour nos hôtes." 
                    differentclass="propos-collapse"/>
            </div>
        </div>
    )
}

export default Propos