import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from './popup/popup';

const ContactUs = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0b6kg78', 'template_21q20uk', form.current, {
        publicKey: 'uzZPcXhAKZZ3GQpzM',
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

  return (
    <section id="reservation">
      <h1>Réservez votre place!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Vos informations</h2>
        <span className='user-name'>
          <label>Noms:</label>
          <input type="text" name="client_last_name" placeholder='Nom' required/>
          <label>Prénoms:</label>
          <input type="text" name="client_first_name" placeholder='Prénoms' required/>
        </span>
        <span className='user-contact'>
          <div>
            <label>email:</label>
            <input type="email" name="client_email" placeholder='email'/>
          </div>
          <div>
            <label>numéros:</label>
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
            <select name="island_choice" id="island" required>
              <option value="">Faites votre choix</option>
              <option value="island1">Circuit Nord</option>
              <option value="island2">Tour de Ville</option>
              <option value="island3">Nosy Komba</option>
              <option value="island4">Nosy Tanikely</option>
              <option value="island5">Nosy Iranja</option>
              <option value="island6">Sakatia</option>
              <option value="island7">Lokobe</option>
            </select>
          </div>
        </span>
        <input type="submit" value="Réserver" />
      </form>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </section>
  );
};

export default ContactUs;
