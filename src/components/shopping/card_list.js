
import Card from './card_prdct';

function CardList({product}){
    return(
            <div className="shop-container">
                {
                    product.map((user, i) => {
                        return(
                            <Card 
                            key={product[i].id}
                            id={product[i].id}
                            title={product[i].title}
                            price={product[i].price}
                            descript={product[i].descrip}
                            url={product[i].url}
                            img={product[i].image}
                            more={product[i].mores}
                            />
                        )

                    })
                    
                }
                
            </div>

    );
}

export default CardList;