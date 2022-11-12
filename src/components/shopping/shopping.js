
import Cart from './cart_icon';

import { Outlet } from "react-router-dom";
import './shop.css';



function Shop(){

    return(
        <>
            <Cart />
            <Outlet />
        </>

    );
}

export default Shop;