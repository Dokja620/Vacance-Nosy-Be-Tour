import React from 'react';
import { NavLink } from "react-router-dom";

import vanille from '../assets/imgs/boutique/vanille.jpg';
import vangovango from '../assets/imgs/boutique/vangovango.webp';
import huile from '../assets/imgs/boutique/huile.webp';

const Store = () => {
    return ( 
        <section id="store">
            <h1>Notre boutique</h1>
            <h2>Ne rentrez pas chez vous sans emporter un petit souvenir de votre voyage.</h2>
            <div className="shop">
                <div id="article-1" className="product">
                    <div className="prix">
                        <div className="imgs">
                            <div className='gs van'>
                                <img src={vanille} alt="Vanille"/>
                                <p>Vanille de bonne qualité</p>
                            </div>
                        </div>
                        <p>15€ / 500G</p>
                    </div>
                    <NavLink to='/achat'>
                        <div className="buy"><p>Réserver</p></div>
                    </NavLink>
                </div>

                <div id="article-2" className="product">
                    <div className="prix">
                        <div className="imgs">

                            <div className='gs'>
                                <img src={huile} alt="ylang-ylang" />
                                <p>Huile essentielle d'ylang-ylang</p>
                            </div>
                        </div>
                        <p>5€ / Tube</p>
                    </div>
                    <NavLink to='/achat'>
                        <div className="buy"><p>Réserver</p></div>
                    </NavLink>
                </div>

                <div id="article-3" className="product">
                    <div className="prix">
                        <div className="imgs">
                            <div className='gs'>
                                <img src={vangovango} alt="Bracelet" />
                                <p>Bracelet en argent</p>
                            </div>
                        </div>
                        <p>10€ à 40€</p>
                    </div>
                    <NavLink to='/achat'>
                        <div className="buy"><p>Réserver</p></div>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}
 
export default Store;