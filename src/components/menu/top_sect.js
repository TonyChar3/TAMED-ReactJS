import { Link } from 'react-router-dom';

function Top(){
    return(
        <div className="top-page-container">
            <div className="top-message">
                <h1 className="main-welcome">Site officiel de TAMED </h1>
                <button className="shop-now-btn"><Link to="/shopping/article">Achète maintenant</Link></button>
            </div>
        </div>
    );
}

export default Top;