import Card from './prdct_cards';

function CardList( {products} ){
    return(
        <div className="shop-container">
            {
                products.map((prdct, i) => {
                    return(
                        <Card

                        key={i}
                        id={products[i].id}
                        name={products[i].name}
                        price={products[i].price}
                        descrip={products[i].descrip}
                        img={products[i].image}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;