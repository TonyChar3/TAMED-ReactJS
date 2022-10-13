import './footer.css';
import OtherLinks from './footer_links';
import Copyrights from './copyright';

function Footer(){
    return(
        <footer>
            <div className="footer__container">
                <OtherLinks />
                <ul className="footer__icons">
                    <li><a href="/" target="_blank"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="/"><i className="bi bi-tiktok"></i></a></li>
                    <li><a href="/"><i className="bi bi-snapchat"></i></a></li>
                </ul>
                <Copyrights />
            </div>
        </footer>
    );
}

export default Footer;