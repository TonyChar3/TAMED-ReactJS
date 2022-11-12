import { Link } from 'react-router-dom';

function Card({id, title, price, descript, more, url, img}){
    return(
        <div className="product-container">
            <img src={ img } alt="product" className="prodct-img"/>
            <p>{title}</p>
            <span>En stock</span>
            <h6 className="price-tag">${ price }</h6>
            <div className="shopCardBtn__container">
                <button className="prodct-btn snipcart-add-item" 
                    data-item-id={ id }
                    data-item-price={ price }
                    data-item-url={ url }
                    data-item-description={ descript }
                    data-item-image={ img }
                    data-item-name={ title }
                    data-item-custom1-name="Couleur"
                    data-item-custom1-options="Rouge|Or|Blanche"
                    data-item-custom2-name="Grandeur"
                    data-item-custom2-options="L|XL|M|SM"
                    data-item-taxes="TPS|TVQ">PANIER+</button>
                <button className="more-btn"><Link to={`/shopping/${ id }`}>Voir +</Link></button> 
            </div>
        </div> 
    );
}

export default Card;