// import { Link } from 'react-router-dom';
import '../styles/Card.scss'
import data from '../datas/logements.json'


function Card() {

  return (
    <div className="Gallery">
      <ul className='Card'>
        {
          data.map((data) => (
            <li key={data.id} className="Card__list">
              <img className="Card__list--img" src={data.cover} alt={data.title} />
              <h2 className="Card__list--title">{data.title}</h2>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Card

