import img1 from '../../img/pexels-geancarlo-peruzzolo-6796966.jpg';
import img2 from '../../img/belt2.jpg';

function Promotion(){
    return(
        <>
            <h3 id="imgGrid__title">Nos produits de haute qualité</h3>
            <div className="img-container">
                <img id="prodct-img1" src={img1} alt="*products*"/>
                <h3 id="prodct-desc1">Wrist Straps -$12.99-</h3>

                <h3 id="prodct-desc2">Belts - $15.99 -</h3>
                <img id="prodct-img2" src={img2} alt="*products*"/>
            
            </div>
            <div id="color-container"></div>
        </>

    );
}

export default Promotion;