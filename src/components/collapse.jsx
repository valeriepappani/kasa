import '../styles/collapse.scss'
import { useState } from 'react'
import icon from './../assets/arrow_back_ios-24px_2.svg'

function Collapse({ title, content, differentclass }) {
    const [isOpen, setIsOpen] = useState(false); // état de base : fermé

    return (
        <div className={`collapse ${differentclass}`}>
            <div className="collapse__encart">
                <h2 className="collapse__title">{title}</h2>
                <img 
                    src={icon} 
                    alt="icon dropdown" 
                    className={`collapse__icon ${isOpen ? 'ouvert' : 'fermer'}`} 
                    onClick={() => setIsOpen(!isOpen)} 
                />
            </div>
            <div className={`collapse__animation ${isOpen ? 'open' : ''}`}>
                <div className="collapse__content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Collapse;