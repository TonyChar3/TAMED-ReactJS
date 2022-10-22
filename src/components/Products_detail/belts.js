import './see_more.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Belts(){
    const [MainImg, setMain] = useState('/img/belt1.jpg')

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
                        <img src="/img/belt1.jpg" onClick={() => ChangeImg('/img/belt1.jpg')} alt="Prodct" />
                        <img src="/img/belt2.jpg" onClick={() => ChangeImg('/img/belt2.jpg')} alt="Prodct" />
                        <img src="/img/belt3.jpg" onClick={() => ChangeImg('/img/belt3.jpg')} alt="Prodct" />
                    </div>
                    <img className='main__img' src={MainImg} alt="Main prodct" />
                </div>
            </div>

            <div className="detailsBtn__container">
                <div className="Descrip__container">
                    <h4>Ceinture de support, qualité suppérieure en cuire et grosse attache en aluminium pour tenir le tout.</h4>
                </div>
                <div className="NamePrice__container">
                    
                    <h3>Ceinture</h3>
                    <h4>- $150.99 -</h4>
                </div>

                <button className="prodct-btn snipcart-add-item"
                id="belts"
                data-item-id="belts"
                data-item-price="150.99"
                data-item-url="/"
                data-item-description="Ceinture de support, qualité suppérieure en cuire et grosse attache en aluminium pour tenir le tout."
                data-item-image="/img/belt1.jpg"
                data-item-name="Ceinture"
                data-item-custom1-name="Couleur"
                data-item-custom1-options="Rouge|Or|Blanche"
                data-item-custom2-name="Grandeur"
                data-item-custom2-options="L|XL|M|SM"
                data-item-taxes="TPS|TVQ">PANIER+</button>
            </div>
        </div>


        </>
    );
}

export default Belts;