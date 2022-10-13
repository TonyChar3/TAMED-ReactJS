import Cart from './cart_icon';
import CardList from './card_list';
import { product } from './products';

import './shop.css';

function Shop(){
    return(
        <>
            <Cart />
            <CardList products={product}/>
        </>

    );
}

export default Shop;