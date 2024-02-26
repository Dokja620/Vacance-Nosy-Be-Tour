import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0b6kg78', 'template_21q20uk', form.current, {
        publicKey: 'uzZPcXhAKZZ3GQpzM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="reservation">
      <h1>Réservez votre place!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nom:</label>
        <input type="text" name="client_last_name" />
        <label>Prénoms:</label>
        <input type="text" name="client_first_name" />
        <label>Email:</label>
        <input type="email" name="client_email" />
        <label>Numéros:</label>
        <input type="text" name="client_phone" />
        <label>Date d'arrivée:</label>
        <input type="date" name="arrival_date" />
        <label>Date de départ:</label>
        <input type="date" name="departure_date" />
        <label>Hôtel:</label>
        <input type="text" name="client_hotel" />
        <label>Nombres de personnes:</label>
        <input type="number" name="number_of_client" />
        <label>Îles à visiter:</label>
        <select name="island_choice" id="island">
          <otion value=""></otion>
          <option value="island1">iles 1</option>
          <option value="island2">iles 2</option>
          <option value="island3">iles 3</option>
          <option value="island4">iles 4</option>
        </select>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default ContactUs;