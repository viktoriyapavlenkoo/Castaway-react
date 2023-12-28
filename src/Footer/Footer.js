import Nav from '../Elements/Nav';
import Players from '../Elements/Players';
import socialsData from '../json/socials.json';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__first-block">
                    <a href="/">
                        <img src="resources/images/logo-img.svg" alt="Logo" />
                    </a>
                    <ul className="socials__list">
                        {socialsData.map((item, index) => 
                        <li key={index} className='socials__item'>
                            <a href={item.href} className='socials__link'>
                                <img src={item.image} alt={item.name} />
                            </a>
                        </li>)}
                    </ul>
                </div>
                <div className="footer__block-blocks">
                <div className="footer__second-block">
                    <Nav/>
                </div>
                <div className="footer__third-block">
                    <ul className="add-menu">
                        <li className="add-menu__item"><a href="/">Style Guide</a></li>
                        <li className="add-menu__item"><a href="/">Instructions</a></li>
                        <li className="add-menu__item"><a href="/">Changelog</a></li>
                        <li className="add-menu__item"><a href="/">Credit</a></li>
                        <li className="add-menu__item"><a href="/">Powered by Webflow</a></li>
                        <li className="add-menu__item"><a href="/">Licenses</a></li>
                    </ul>
                </div>
                </div>
                <div className="footer__fourth-block">
                    <Players/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;