import '../../styles/index.scss'
import '../../styles/Footer.scss'
import LogoBlanc from '../../assets/Kasa-logo-blanc.png'


function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__elem'>
                <img src={LogoBlanc} alt='logo kasa blanc' className='footer__elem--logo' />
                <p className='footer__elem--content'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer