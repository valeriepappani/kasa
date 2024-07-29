import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../datas/logements.json';
import '../styles/Location.scss';
import Collapse from '../components/collapse';
import Slideshow from '../components/Slideshow';
import Rating from '../components/rating';
import HostDetails from '../components/HostDetails'

function Location() {
    const { id } = useParams(); // Id de l'url
    const navigate = useNavigate();
    const [ficheSelection, setFicheSelection] = useState(null);

    useEffect(() => {
        const selectedFiche = data.find((element) => element.id === id);
        if (!selectedFiche) {
            navigate('/error'); // Redirige vers la page d'erreur si l'ID n'est pas valide
        } else {
            setFicheSelection(selectedFiche);
        }
    }, [id, navigate]);

    if (!ficheSelection) {
        return null;
    }

    return (
        <div className="ficheAppart">
            <Slideshow ficheSelection={ficheSelection} />
            <div className="ficheAppart__part1">
                <div className="ficheAppart__part1--titre">
                    <h1 className="ficheAppart__title">{ficheSelection.title}</h1>
                    <p className="ficheAppart__location">{ficheSelection.location}</p>
                    <div className="ficheAppart__tags">
                        {ficheSelection.tags.map((tag) => (
                            <p className="ficheAppart__tags--list" key={tag}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="ficheAppart__host">
                    <div className="ficheAppart__host--haut">
                        <HostDetails host={ficheSelection.host} />
                        <img className="ficheAppart__host--picture" src={ficheSelection.host.picture} alt="" />
                    </div>
                    <Rating value={ficheSelection.rating} />
                </div>
            </div>

            <div className="ficheAppart__part2">
                <Collapse
                    title="Description"
                    content={ficheSelection.description}
                    className="ficheAppart__part2--collapse "
                    differentclass="collapse-location" />
                <Collapse
                    title="Équipements"
                    content={
                        ficheSelection.equipments.map((equipement) => (
                            <p key={equipement}>{equipement}</p>
                        ))
                    } />
            </div>
        </div>
    );
}

export default Location