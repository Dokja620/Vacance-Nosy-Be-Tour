import logo from '../assets/imgs/logo.jpg';
import arrow from '../assets/imgs/fleche-vers-le-bas.png';
import iranja from '../assets/imgs/island/iranja.jpg';
import komba from '../assets/imgs/island/komba.jpg';
import lokobe from '../assets/imgs/island/lokobe.jpg';
import sakatia from '../assets/imgs/island/sakatia.jpg';
import tanikely from '../assets/imgs/island/tanikely.jpg';

const Home = () => {
    return ( 
        <section id='home'>
            {/* Page un excursion */}
            <section id="first">
                <div class="first">
                    <div class="logo">
                        <h2 class="vacances">vacances</h2>
                        <h2 class="tour">nosy-be tour</h2>
                        <div class="container">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
                <div class="acceuil">
                    <p>
                        Profitez de votre séjour le mieux possible en découvrant chaque merveille de la grande île !    
                    </p>
                </div>
            </section>

            {/* Separation page */}
            <section id="separation">
                <div className="arrow">
                    <img src={arrow} alt="" />
                </div>
            </section>

            {/* Separation page */}
            <section id="second">
                <h1>Nos excursions</h1>
                <h2>Profitez pleinement de vos vacances, <br/> en visitant nos magnifiques îlots !</h2>
                <div class="choice">
                    <div class="island">
                        <div class="image">
                            <img src={komba} alt=""/>
                        </div>
                        <p>Nosy Komba</p>
                    </div>
                    <div class="island">
                        <div class="image">
                            <img src={tanikely} alt=""/>
                        </div>
                        <p>Nosy Tanikely</p>
                    </div>
                    <div class="island">
                        <div class="image">
                            <img src={iranja} alt=""/>
                        </div>
                        <p>Nosy Iranja</p>
                    </div>
                    <div class="island">
                        <div class="image">
                            <img src={sakatia} alt=""/>
                        </div>
                        <p>Nosy Sakatia</p>
                    </div>
                    <div class="island">
                        <div class="image">
                            <img src={lokobe} alt=""/>
                        </div>
                        <p>Lokobe</p>
                    </div>
                    <div className="islog">
                        <div class="logo">
                            <h2 class="vacances">vacances</h2>
                            <h2 class="tour">nosy-be tour</h2>
                            <div class="container">
                                <img src={logo} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Réservation */}
            <section id="three">
                <div class="reservation">
                    <div class="about">
                        <div class="same depa">
                            <h2 class="dep">Départ</h2>
                            <p>8h30 à l'hôtel</p>
                        </div>
                        <div class="same top">
                            <h2 class="inc">Inclus</h2>
                            <p>
                                Transfert - Eau minérale - Entrée parcs - Déjeuner - Guide 
                            </p>
                        </div>
                        <div class="same">
                            <h2>Prix</h2>
                            <p> 60€/personnes <br/>
                                03 personne min</p>
                        </div>
                    </div>
                    <div class="reserve">réserver</div>
                </div>
            </section>
        </section>
     );
}
 
export default Home;