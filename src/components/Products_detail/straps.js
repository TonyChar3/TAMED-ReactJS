import './see_more.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Straps(){
    const [MainImg, setMain] = useState('/TAMED_img/385848283.PNG')

    const ChangeImg = (img) => {
        setMain(img)
    }

    return(
        <>
        <div className="plus__container">
            <div className="return__btn">
                <Link to="/shopping/article">
                    <i className="bi bi-arrow-left"></i>
                    <span>Retour Magasin</span>
                </Link>
            </div>
            <div className="seemore__container">
                <div className="imgs__container">
                    <div className="slider__container">
                        <img src="/TAMED_img/IMG_9373-.jpg" onClick={() => ChangeImg('/TAMED_img/IMG_9373-.jpg')} alt="Prodct" />
                        <img src="/TAMED_img/12228372.PNG" onClick={() => ChangeImg('/TAMED_img/12228372.PNG')} alt="Prodct" />
                        <img src="/TAMED_img/IMG_9358-.jpg" onClick={() => ChangeImg('/TAMED_img/IMG_9358-.jpg')} alt="Prodct" />
                        <img src="/TAMED_img/IMG_9640-.jpg" onClick={() => ChangeImg('/TAMED_img/IMG_9640-.jpg')} alt="Prodct" />
                        <img src="/TAMED_img/IMG_9334-.jpg" onClick={() => ChangeImg('/TAMED_img/IMG_9334-.jpg')} alt="Prodct" />
                    </div>
                    <img className='main__img' src={MainImg} alt="Main prodct" />
                </div>
            </div>
            <div className="detailsBtn__container">
                <div className="Descrip__container">
                    <h4>Bandes en tissue tressé double, capable de supporter votre poignet tout en gardant un certain comfort lors de PR.</h4>
                </div>
                <div className="NamePrice__container">
                    <h3>Bandes de poignet</h3>
                    <h4>- $150.99 -</h4>
                </div>

                <button className="prodct-btn snipcart-add-item"
                id="wraps"
                data-item-id="wraps"
                data-item-price="150.99"
                data-item-url="/"
                data-item-description="Ceinture de support, qualité suppérieure en cuire et grosse attache en aluminium pour tenir le tout."
                data-item-image="/TAMED_img/385848283.PNG"
                data-item-name="Bandes de poignet"
                data-item-custom1-name="Couleur"
                data-item-custom1-options="Rouge|Or|Blanche"
                data-item-taxes="TPS|TVQ">PANIER+</button>
            </div>
        </div>

        </>
    );
}

export default Straps;