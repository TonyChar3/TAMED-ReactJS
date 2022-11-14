import './see_more.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Kneewraps(){
    const [MainImg, setMain] = useState('/TAMED_img/kneewraps-Blck.PNG')

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
                        <img src="/TAMED_img/kneewraps-Blck.PNG" onClick={() => ChangeImg('/TAMED_img/kneewraps-Blck.PNG')} alt="Prodct" />
                        <img src="/TAMED_img/kneewraps-Red3.jpg" onClick={() => ChangeImg('/TAMED_img/kneewraps-Red3.jpg')} alt="Prodct" />
                    </div>
                    <img className='main__img' src={MainImg} alt="Main prodct" />
                </div>
            </div>

            <div className="detailsBtn__container">
                <div className="Descrip__container">
                    <h4>Genouillère en tissue doux au touché, supporte vos genou lors de vos entrainement vigoureux</h4>
                </div>
                <div className="NamePrice__container">
                    
                    <h3>Genouillère</h3>
                    <h4>- $45.00 -</h4>
                </div>

                <button className="prodct-btn snipcart-add-item"
                id="knee_wraps"
                data-item-id="knee_wraps"
                data-item-price="45.00"
                data-item-url="/"
                data-item-description="Genouillère en tissue doux au touché, supporte vos genou lors de vos entrainement vigoureux"
                data-item-image="/TAMED_img/kneewraps-Blck.PNG"
                data-item-name="Genouillère"
                data-item-taxes="TPS|TVQ">PANIER+</button>
            </div>
        </div>
        </>
    );
}

export default Kneewraps;