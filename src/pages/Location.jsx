import React from 'react';
import data from '../datas/logements.json';
import '../styles/Location.scss';
import Collapse from '../components/collapse';
import Slideshow from '../components/Slideshow';
import Rating from '../components/rating'
import { useParams } from 'react-router-dom';

function Location() {

    const { id } = useParams(); // Id de l'url
    const ficheSelection = data.find((element) => element.id === id); 

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
                        <p className="ficheAppart__host--name">{ficheSelection.host.name}</p>
                        <img className="ficheAppart__host--picture" src={ficheSelection.host.picture} alt="" />
                    </div>
                    {/* <p>{ficheSelection.rating}</p> */}
                    <Rating value={ficheSelection.rating} />                    
                </div>
            </div>

            <div className="ficheAppart__part2">
                <Collapse
                    title="Description"
                    content={ficheSelection.description} 
                    className="ficheAppart__part2--collapse"/>
                <Collapse
                    title="Équipements"
                    content={
                        ficheSelection.equipments.map((equipement) => (
                            <p key={equipement}>{equipement}</p>
                        ))
                    } />
            </div>
        </div>
    )
}

export default Location;