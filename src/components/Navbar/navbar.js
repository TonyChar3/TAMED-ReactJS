import {useState, useEffect} from 'react';
import './navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar(){
    // useState hook for the nav pop-up and animation
    const [isActive, setActive] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY > 5 ? setSticky(true) : setSticky(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent)
        };
    }, []);

    // function to handle the click event
    const handleClick = (event) => {
        event.preventDefault()
        setActive(isActive => !isActive);
        setOpen(isOpen => !isOpen);
    }

    // ternary operator to choose to either close or open
    let toggleActive =  isActive ? 'active' : '';
    let toggleOpen = isOpen ? 'open' : '';
    let toggleSticky = isSticky ? 'sticky' : '';
    
    const CustomLink = ({to, children, ...props}) => {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true})
        return(
            <li >
                <Link to={to} {...props} className={`${isActive ? 'current-page' : ''} ${toggleSticky}`}>
                    { children }
                </Link>
            </li>
        );
    }


    
    return(
        <nav className={`navbar ${toggleSticky}`} >
            <div className="brand-title"><Link to="/" className={toggleSticky}>Tamed</Link></div>

            <a href="/" onClick={handleClick} className={`nav-toggle-btn ${toggleOpen}`} id="nav-toggle-btn">
                <span className="ham-bar"></span>
                <span className="ham-bar"></span>
                <span className="ham-bar"></span>
            </a>
            <div className= {`nav-links ${toggleActive}`} id="nav-links">
                <ul>
                    <CustomLink to="/" className={toggleSticky}>Menu</CustomLink>
                    <CustomLink to="/shopping" className={toggleSticky}>Magasin</CustomLink>
                </ul>
            </div>            
        </nav>
    );
}



export default Navbar;