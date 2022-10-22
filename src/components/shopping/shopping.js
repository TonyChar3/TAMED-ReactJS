import products from "../../products";
import Cart from './cart_icon';
import CardList from './card_list';
import './shop.css';



function Shop(){

    return(
        <>
            <Cart />
            <CardList product={products}/>
        </>

    );
}

export default Shop;