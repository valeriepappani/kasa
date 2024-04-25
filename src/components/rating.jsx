import React from 'react';
import RedStar from '../assets/star-red.png'
import GrayStar from '../assets/star-gray.png'
import '../styles/rating.scss'

const Rating = ({ value }) => {
    const etoiles = [];
    for (let i = 0; i < 5; i++) {
        etoiles.push(<Star key={i} selected={i < value} />);
    }
    return (
        <div className="rating">
            {etoiles}
        </div>
    );
};

const Star = ({ selected }) => {
    return (
        <img className="rating__etoile" src={selected ? RedStar : GrayStar} alt="etoiles" />);
};

export default Rating;