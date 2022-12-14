import './footer.css';
import OtherLinks from './footer_links';
import Copyrights from './copyright';

function Footer(){
    return(
        <footer>
            <div className="footer__container">
                <OtherLinks />
                <ul className="footer__icons">
                    <li><a href="https://www.instagram.com/tamed_store" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="/" target="_blank" rel="noreferrer"><i className="bi bi-tiktok"></i></a></li>
                    <li><a href="/" target="_blank" rel="noreferrer"><i className="bi bi-snapchat"></i></a></li>
                </ul>
                <Copyrights />
            </div>
        </footer>
    );
}

export default Footer;