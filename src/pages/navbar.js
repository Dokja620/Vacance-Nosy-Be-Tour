import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    useEffect(() => {
        const closeMobileMenu = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !burgerRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
                setIsBurgerActive(false);
            }
        };

        document.addEventListener('mousedown', closeMobileMenu);

        return () => {
            document.removeEventListener('mousedown', closeMobileMenu);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsBurgerActive(!isMobileMenuOpen);
    }

    return ( 
        <nav>
            <div className="home"><NavLink to='/Acceuil'><p>Accueil</p></NavLink></div>
            <div className="nav-links">
                <ul ref={menuRef} className={`nav-mo ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                    <li><NavLink to='/excursion' className='menu-link'>Excursion</NavLink></li>
                    <li><NavLink to='/circuit-nord' className='menu-link'>Circuit nord</NavLink></li>
                    <li><NavLink to='/reservation' className='menu-link'>Reservation</NavLink></li>
                    <li><NavLink to='/boutique' className='menu-link'>Boutique</NavLink></li>
                    <li><NavLink to='/achat' className='menu-link'>Achat</NavLink></li>
                </ul>
            </div>
            <div ref={burgerRef} className={`burger ${isBurgerActive ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    ); 
}
 
export default NavBar;
