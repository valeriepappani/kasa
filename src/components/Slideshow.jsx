import React, { useState } from 'react';
import '../styles/Slideshow.scss';
import Left from '../assets/left.png'
import Right from '../assets/right.png'

function Slideshow({ ficheSelection }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === ficheSelection.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? ficheSelection.pictures.length - 1 : prevIndex - 1));
    };


    return (
        <div className="slider">
            <div className="slider__prev" onClick={prevSlide}>
                <img src={Left} alt="left arrow" />
            </div>
                {ficheSelection.pictures.map((picture, index) => (
                    <div key={index} className={index === activeIndex ? 'slide active' : 'slide'}>
                        <img src={picture} alt={`pic ${index + 1}`} className="slider__img"/>
                    </div>

                ))}
            <div className="slider__next" onClick={nextSlide}>
                <img src={Right} alt="right arrow" />
            </div>
        </div>
    );
}

export default Slideshow