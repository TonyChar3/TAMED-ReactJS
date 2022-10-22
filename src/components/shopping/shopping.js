import products from "../../products";
import Cart from './cart_icon';
import CardList from './card_list';
import Belts from '../Products_detail/belts';
import { Route, Routes } from 'react-router-dom';
import './shop.css';



function Shop(){

    return(
        <>
            <Cart />
            <CardList product={products}/>
            <Routes>
                <Route path="/belts" element={<Belts />}/>
            </Routes>
        </>

    );
}

export default Shop;