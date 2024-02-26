import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav>
            <div className="home"><NavLink to='/Acceuil'><p>Accueil</p></NavLink></div>
            <div className="nav-links">
                <ul>
                    <NavLink to='/iles'><li>Iles</li></NavLink>
                    <NavLink to='/circuit-nord'><li>Circuit nord</li></NavLink>
                    <NavLink to='/reservation'><li>Reservation</li></NavLink>
                    <NavLink to='/boutique'><li>Boutique</li></NavLink>
                    <NavLink to='/achat'><li>Achat</li></NavLink>
                </ul>
            </div>
        </nav>
    ); 
}
 
export default NavBar;
