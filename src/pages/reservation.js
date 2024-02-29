import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from './popup/popup';

const ContactUs = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [tripPrice, setTripPrice] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_ow4y3im', 'template_jaci92l', form.current, {
      publicKey: 'ftcjiH_UazmGRSD3Q',
    })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowPopup(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleIslandChange = (e) => {
    const selectedIsland = e.target.value;
    let priceString = '';
    // Set the trip price based on the selected island
    switch (selectedIsland) {
      case 'Circuit Nord':
        priceString = '120€ par personne';
        break;
      case 'Tour de Nosy be':
        priceString = '60€ par personne';
        break;
      case 'Nosy komba':
        priceString = '50€ | 45€(+05 pers)';
        break;
      case 'Nosy Tanikely':
        priceString = '50€ | 45€(+05 pers)';
        break;
      case 'Nosy Iranja':
        priceString = '50€ | 45€(+05 pers)';
        break;
      case 'Nosy Sakatia':
        priceString = '30€ par personne';
        break;
      case 'Lokobe':
        priceString = '45€ par personne';
        break;
      default:
        priceString = '';
    }

    setTripPrice(priceString);
  };

  return (
    <section id="reservation">
      <h1>Réservez votre place!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Vos informations</h2>
        <span className='user-name'>
          <input type="text" name="client_last_name" placeholder='Nom' required/>
          <input type="text" name="client_first_name" placeholder='Prénoms' required/>
        </span>
        <span className='user-contact'>
          <div>
            <input type="email" name="client_email" placeholder='email'/>
          </div>
          <div>
            <input type="text" name="client_phone" placeholder='numéros' required/>
          </div>
        </span>
        <h2>votre séjour</h2>
        <span className='user-stay'>
          <div>
            <label>Date d'arrivée:</label>
            <input type="date" name="arrival_date"/>
          </div>
          <div>
            <label>Date de départ:</label>
            <input type="date" name="departure_date"/>
          </div>
          <div>
            <label>Hôtel:</label>
            <input type="text" name="client_hotel" placeholder='hôtel' required/>
          </div>
        </span>
        <h2>l'excursion</h2>
        <span className='excursion'>
          <div>
            <label>Nombres de personnes:</label>
            <input type="number" name="number_of_client" placeholder='personne(s)' required min="01" max="50" pattern="0[1-9]|[1-4][0-9]|50" />
          </div>
          <div>
            <label>Îles à visiter:</label>
            <select name="island_choice" id="islands" required onChange={handleIslandChange}>
              <option value="">Faites votre choix</option>
              <option value="Circuit Nord">Circuit Nord</option>
              <option value="Tour de Nosy be">Tour de l'Îles</option>
              <option value="Nosy komba">Nosy Komba</option>
              <option value="Nosy Tanikely">Nosy Tanikely</option>
              <option value="Nosy Iranja">Nosy Iranja</option>
              <option value="Nosy Sakatia">Nosy Sakatia</option>
              <option value="Lokobe">Lokobe</option>
            </select>
          </div>
          <div>
            <label>Prix:</label>
            <input type="text" name="trip_price" value={tripPrice} placeholder='00€' readOnly />
          </div>
        </span>
        <input type="submit" value="Réserver" />
      </form>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </section>
  );
};

export default ContactUs;
