import './see_more.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LiftStraps(){
    const [MainImg, setMain] = useState('/TAMED_img/IMG_9872-.jpg')

    const ChangeImg = (img) => {
        setMain(img)
    }



    return(
        <>

        <div className="plus__container">
            <div className="return__btn">
                <Link to="/shopping">
                    <i className="bi bi-arrow-left"></i>
                    <span>Retour Magasin</span>
                </Link>
            </div>
            <div className="seemore__container">
                <div className="imgs__container">
                    <div className="slider__container">
                        <img src="/TAMED_img/IMG_9872-.jpg" onClick={() => ChangeImg('/TAMED_img/IMG_9872-.jpg')} alt="Prodct" />
                        <img src="/TAMED_img/DSC_0162--.jpg" onClick={() => ChangeImg('/TAMED_img/DSC_0162--.jpg')} alt="Prodct" />
                        <img src="/TAMED_img/IMG_9868-.jpg" onClick={() => ChangeImg('/TAMED_img/IMG_9868-.jpg')} alt="Prodct" />
                        <img src="/TAMED_img/DSC_0161-.jpg" onClick={() => ChangeImg('/TAMED_img/DSC_0161-.jpg')} alt="Prodct" />
                    </div>
                    <img className='main__img' src={MainImg} alt="Main prodct" />
                </div>
            </div>

            <div className="detailsBtn__container">
                <div className="Descrip__container">
                    <h4>Bandes en tissue tressé double, capable de supporter votre poignet tout en gardant un certain comfort lors de PR.</h4>
                </div>
                <div className="NamePrice__container">
                    
                    <h3>Sangles de levage</h3>
                    <h4>- $150.99 -</h4>
                </div>

                <button className="prodct-btn snipcart-add-item"
                id="straps"
                data-item-id="straps"
                data-item-price="150.99"
                data-item-url="/"
                data-item-description="Bandes en tissue tressé double, capable de supporter votre poignet tout en gardant un certain comfort lors de PR."
                data-item-image="/TAMED_img/IMG_9872-.jpg"
                data-item-name="Sangles de levage"
                data-item-custom1-name="Couleur"
                data-item-custom1-options="Noire|Bleu"
                data-item-taxes="TPS|TVQ">PANIER+</button>
            </div>
        </div>


        </>
    );
}

export default LiftStraps;