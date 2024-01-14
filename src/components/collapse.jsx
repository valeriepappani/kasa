import '../styles/collapse.scss'
import { useState } from 'react'
import icon from './../assets/arrow_back_ios-24px_2.svg'

function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='collapse' >
            <div className="collapse__encart">
                <h2 className="collapse__title active" > {title}</h2>
                <img src={icon} alt="icon dropdown" className="collapse__icon ouvert" onClick={() => setIsOpen(false)}></img>
            </div>
            <div className="collapse__content">{content}</div>
        </div>
    ) : (
        <div className='collapse'>
            <div className="collapse__encart">
                <h2 className="collapse__title false"> {title}</h2>
                <img src={icon} alt="icon dropdown" className="collapse__icon fermer" onClick={() => setIsOpen(true)}></img>
            </div>
        </div>
    )
}

export default Collapse