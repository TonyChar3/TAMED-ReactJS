import './footer.css';
import {Link} from 'react-router-dom';

function OtherLinks(){
    return(
        <div className="footer__emailAbout-links">
            <h4><Link to="/mission" id="footer__span-mission">À propos de nous</Link></h4>
            <h4><a href="/" id="footer__emailLink">tamed.ca@gmail.com</a></h4>
        </div>
    );
}

export default OtherLinks;