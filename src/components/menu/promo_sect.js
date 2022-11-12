import { Link } from 'react-router-dom';

function Promotion(){
    return(
        <>
            <h3 id="imgGrid__title">Notre équipement de haute qualité</h3>
            <div className="img-container">
                <Link to="/shopping/wraps"><img id="prodct-img1" src="TAMED_img/493939299.PNG" alt="*products*"/></Link>
                <h3 id="prodct-desc1">Wrist Straps -$12.99-</h3>

                <h3 id="prodct-desc2">Belts - $15.99 -</h3>
                <Link to="/shopping/belts"><img id="prodct-img2" src="/TAMED_img/belt2.jpg" alt="*products*"/></Link>
            
            </div>
            <div id="color-container"></div>
        </>

    );
}

export default Promotion;