import logo from '../assets/imgs/logo.jpg';

//islands excursion images
import arrow from '../assets/imgs/fleche-vers-le-bas.png';
import iranja from '../assets/imgs/island/iranja.jpg';
import komba from '../assets/imgs/island/komba.jpg';
import lokobe from '../assets/imgs/island/lokobe.jpg';
import sakatia from '../assets/imgs/island/sakatia.jpg';
import tanikely from '../assets/imgs/island/tanikely.jpg';
//island tourimages
import lemuria from '../assets/imgs/programme/lemuria.jpg';
import hell from '../assets/imgs/programme/ville-1.jpg';
import sacre from '../assets/imgs/programme/sacre.jpg';
import andilana from '../assets/imgs/programme/andilana.jpg';
import passot from '../assets/imgs/programme/passot.jpg';

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
            <section id="third">
                <h1 class="oo">Tour de l'île !</h1>
                <h1 class="ii">Au  programme :</h1>
                <div class="programme">
                    <div class="illustration">
                        <div class="another">
                            <div class="contain">
                                <img src={lemuria} alt=""/>
                            </div>
                            <h1>Lemuria <br/> land</h1>
                        </div>
                    </div>
                    <div class="infos">
                        <p>
                            Ce qui fait la béauté ce parc c’est les différentes types de lémuriens qu’on y retrouve, mais il y’a aussi des poissons, crocodiles, oiseaux, serpents, caméléons et tortues.
                                <br/> <br/>
                            Visite des la distillerie d’ylang-ylang. Un arbre, originaire des Philippines et introduit à Nosy Be par à la fin du XIXe siècle, possèdant une fleur à l’arôme délicat dont la distillation produit toute une palette d’essences de très grande qualité utilisées notamment dans la haute parfumerie.
                        </p>
                    </div>
                </div>
                <div class="programme">
                    <div class="illustration">
                        <div class="another">
                            <div class="contain">
                                <img src={hell} alt=""/>
                            </div>
                            <h1>Hell-ville</h1>
                        </div>
                    </div>
                    <div class="infos">
                        <p>
                            Se trouvant dans le Sud de Nosy Be, Hell-Ville est la capitale de cet archipel. Elle est une ville portuaire. Avec ses vieux canons, le port est un des endroits qui donnent à la ville son charme.
                            <br/> <br/>
                            Un tour dans le marché couvert construit à l’époque coloniale est obligatoire pour admirer cette population et pour profite des épices et des produits artisanaux tesl que des  matériaux de cuisines en bois et en pierre sculptés à la main.
                        </p>
                    </div>
                </div>
                <div class="programme">
                    <div class="illustration">
                        <div class="another">
                            <div class="contain">
                                <img src={sacre} alt=""/>
                            </div>
                            <h1>Arbre sacré</h1>
                        </div>
                    </div>
                    <div class="infos">
                        <p>
                            Un tour dans le marché couvert construit à l’époque coloniale est obligatoire pour admirer cette population et pour profite des épices et des produits artisanaux tesl que des  matériaux de cuisines en bois et en pierre sculptés à la main.    
                        </p>
                    </div>
                </div>
                <div class="programme">
                    <div class="illustration">
                        <div class="another">
                            <div class="contain">
                                <img src={andilana} alt=""/>
                            </div>
                            <h1>Andilana</h1>
                        </div>
                    </div>
                    <div class="infos">
                        <p>
                            Avec son calme et sa beauté, la plage d’Andilana est excellente pour un farniente. Vous pouvez admirez la beauté de l’art nosybéen : peinture sur tableaux
                        </p>
                    </div>
                </div>
                <div class="programme">
                    <div class="illustration">
                        <div class="another">
                            <div class="contain">
                                <img src={passot} alt=""/>
                            </div>
                            <h1>Mont Passot</h1>
                        </div>
                    </div>
                    <div class="infos">
                        <p>
                            300 mètres d’altitude,  avec un vu de 360 degrés. Une superbe vue panoramique  et magnifique coucher de soleil. 
                        </p>
                    </div>
                </div>
            </section>

            {/* Réservation */}
            <section id="fourth">
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