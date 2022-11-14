import { Link } from 'react-router-dom';

function Promotion(){
    return(
        <>
            <h3 id="imgGrid__title">Notre équipement de haute qualité</h3>
            <div className="img-container">
                <Link to="/shopping/knee_wraps"><img id="prodct-img1" src="TAMED_img/385848283.PNG" alt="*products*"/></Link>
                <h3 id="prodct-desc1">Genouillère -$45.00-</h3>

                <h3 id="prodct-desc2">Ceinture a levier - $90.00 -</h3>
                <Link to="/shopping/belts"><img id="prodct-img2" src="/TAMED_img/belt2.jpg" alt="*products*"/></Link>
            
            </div>
            <div id="color-container"></div>
        </>

    );
}

export default Promotion;