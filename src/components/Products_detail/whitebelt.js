import './see_more.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Whitebelt(){
    const [MainImg, setMain] = useState('/TAMED_img/belt1.jpg')

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
                        <img src="/TAMED_img/belt1.jpg" onClick={() => ChangeImg('/TAMED_img/belt1.jpg')} alt="Prodct" />
                        <img src="/TAMED_img/IMG_9637-.jpg" onClick={() => ChangeImg('/TAMED_img/IMG_9637-.jpg')} alt="Prodct" />
                        <img src="/TAMED_img/IMG_9636-.jpg" onClick={() => ChangeImg('/TAMED_img/IMG_9636-.jpg')} alt="Prodct" />
                    </div>
                    <img className='main__img' src={MainImg} alt="Main prodct" />
                </div>
            </div>

            <div className="detailsBtn__container">
                <div className="Descrip__container">
                    <h4>Ceinture blanche, qualité suppérieure en cuire et attache de ceinture originale en aluminium pour tenir le tout.</h4>
                </div>
                <div className="NamePrice__container">
                    
                    <h3>Ceinture en cuire</h3>
                    <h4>- $100.00 -</h4>
                </div>

                <button className="prodct-btn snipcart-add-item"
                id="white_belt"
                data-item-id="white_belt"
                data-item-price="100.00"
                data-item-url="/"
                data-item-description="Ceinture blanche, qualité suppérieure en cuire et attache de ceinture originale en aluminium pour tenir le tout."
                data-item-image="/TAMED_img/belt1.jpg"
                data-item-name="Ceinture en cuire"
                data-item-custom2-name="Grandeur"
                data-item-custom2-options="L|XL|M|SM"
                data-item-taxes="TPS|TVQ">PANIER+</button>
            </div>
        </div>
        </>
    );
}

export default Whitebelt;