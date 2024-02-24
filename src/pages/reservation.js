import React, { useState } from 'react';
import './App.css';

function ContactForm() {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    hotel: '',
    arrivalDate: '',
    departureDate: '',
    numberOfPeople: '',
    island: ''
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form validation or submit the form data here
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="in">
          <label htmlFor="firstName">Noms:</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          /><br/><br/>
        </div>
        <div className="in">
          <label htmlFor="lastName">Prénoms:</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          /><br/><br/>
        </div>
        <div className="in">
          <label htmlFor="number">Numéros:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          /><br/><br/>
        </div>
        <div className="in">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          /><br/><br/>
        </div>
        <div className="in">
          <label htmlFor="arrivalDate">Date d'arrivée:</label>
          <input
            type="date"
            id="arrivalDate"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleInputChange}
            required
          /><br/><br/>
        </div>
        <div className="in">
          <label htmlFor="departureDate">Date de départ:</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleInputChange}
            required
          /><br/><br/>
        </div>
        <div className="in">
          <label htmlFor="numberOfPeople">Nombre de personne:</label>
          <input
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleInputChange}
            required
          /><br/><br/>
        </div>
        <div className="in">
          <label htmlFor="island">Île:</label>
          <select
            id="island"
            name="island"
            value={formData.island}
            onChange={handleInputChange}
            required
          >
            <option value="">Sélectionnez une île</option>
            <option value="Island1">Île 1</option>
            <option value="Island2">Île 2</option>
            <option value="Island3">Île 3</option>
            <option value="Island4">Île 4</option>
            <option value="Island5">Île 5</option>
          </select>
        </div>
        <br/><br/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;
