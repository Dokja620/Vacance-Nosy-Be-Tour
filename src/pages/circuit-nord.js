import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import tsingy from '../assets/imgs/circuit/Tsingy_Rouges_Madagascar.webp';
import mer from '../assets/imgs/circuit/mer-emeraude-diego-suarez-madagascar.webp';
import ambre from '../assets/imgs/circuit/montagme-d-ambre.webp';
import parc from '../assets/imgs/circuit/Ankarana_three.webp';
import hara from '../assets/imgs/circuit/nosy-hara.webp';
import cacao from '../assets/imgs/circuit/cacao.webp';

const Circuit = () => {
    useEffect(() => {
        const boites = document.querySelectorAll('.boite');

        boites.forEach(boite => {
            boite.addEventListener('click', () => {
                const comeElement = document.getElementById('come');
                comeElement.scrollIntoView({ behavior: "smooth" });
            });
        });
    }, []);

    return ( 
        <section id="circuit">
            <h1>Circuit Nord</h1>
            <h2>Découvrez toutes les beautés de la région de diego suarez au nord de madagascar.</h2>
            <div className="places">
                <div className="boite">
                    <h3>Tsingy rouge</h3>
                    <div className="filter"></div>
                    <div>
                        <img src={tsingy} alt="tsingy rouge" />
                    </div>
                </div>

                <div className="boite">
                    <h3>mer d'émeraude</h3>
                    <div className="filter"></div>
                    <div>
                        <img src={mer} alt="mer d'émeraude" />
                    </div>
                </div>
                
                <div className="boite">
                    <h3>montagne d'ambre</h3>
                    <div className="filter"></div>
                    <div>
                        <img src={ambre} alt="montagne d'ambre" />
                    </div>
                </div>

                <div className="boite">
                    <h3>Parc Ankarana</h3>
                    <div className="filter"></div>
                    <div>
                        <img src={parc} alt="Parc Ankarana" />
                    </div>
                </div>

                <div className="boite">
                    <h3>Nosy Hara</h3>
                    <div className="filter"></div>
                    <div>
                        <img src={hara} alt="Nosy Hara" />
                    </div>
                </div>

                <div className="boite">
                    <h3>Plantation cacao</h3>
                    <div className="filter"></div>
                    <div>
                        <img src={cacao} alt="Plantation cacao" />
                    </div>
                </div>
            </div>
            <h2>120€ par personne</h2>
            <NavLink to='/reservation'>
                <div className="reserve" id="come">
                    Réserver
                </div>
            </NavLink>
        </section>
     );
}
 
export default Circuit;
