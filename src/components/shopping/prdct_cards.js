


function Card({ id, name, price, descrip, img}){
    
    console.log(`${img}`)

    return(
        <div className="product-container">
            <h3 className="shop-item-title">{ name }</h3>
                <img src={img} alt="product" className="prodct-img"/>
            <p>{ descrip }</p>
            <h6 className="price-tag">${ price }</h6>
            <div className="add-item-container">
                <button className="prodct-btn snipcart-add-item"
                data-item-id= { id }
                data-item-price={ price }
                data-item-description= { descrip }
                data-item-image= { img }
                data-item-name= { name }
                data-item-custom1-name="Couleur"
                data-item-custom1-options="Rouge|Or|Blanche"
                data-item-taxes="TPS|TVQ">
                AJOUTER+
                </button>
            </div>
        </div> 
         
    );
}

export default Card;