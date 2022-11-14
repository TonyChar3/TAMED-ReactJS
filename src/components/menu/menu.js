import About from './about_sect';
import Promotion from './promo_sect';
import Top from './top_sect';
import './menu.css';

function Menu(){
    return(
        <>
            <Top />
            <Promotion />
            <About />
        </>
    );
}

export default Menu;