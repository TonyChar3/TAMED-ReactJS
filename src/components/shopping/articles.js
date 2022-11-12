import products from "../../products";
import CardList from './card_list';

function Articles(){
    return(
        <CardList product={products}/>
    );
}

export default Articles;