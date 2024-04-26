import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.scss';
import data from '../datas/logements.json';

function Card() {

  return (
    <div className="Gallery">
      <ul className='Card'>
        {data.map((item) => (
          <Link to={`/Location/${item.id}`} key={item.id}>
            <li className="Card__list">
              <img className="Card__list--img" src={item.cover} alt={item.title} />
              <h2 className="Card__list--title">{item.title}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Card;