import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Popup from './popup/popup-prod';

const ContactUs = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [price, setPrice] = useState('');
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0b6kg78', 'template_pamsseo', form.current, {
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

  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setSelectedProduct(selectedProduct);

    // Set price based on selected product
    if (selectedProduct === 'product1') {
      setPrice(15);
    } else if (selectedProduct === 'product2') {
      setPrice(5);
    } else if (selectedProduct === 'product3') {
      setPrice('demander par email');
    } else {
      setPrice(0);
    }
  };

  const handleNumberOfProductsChange = (e) => {
    const numberOfProducts = parseInt(e.target.value);
    setNumberOfProducts(numberOfProducts);
  };

  useEffect(() => {
    const totalPrice = numberOfProducts * price;
    setTotalPrice(totalPrice);
  }, [numberOfProducts, price]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };

  return (
    <section id="reservation">
      <h1>Réservez votre article!</h1>
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
        <h2>Vos achats</h2>
        <span className='excursion'>
          <div>
            <label>Nombres d'articles:</label>
            <input type="number" name="number_of_product" placeholder='produits' required min="1" max="50" pattern="[0-9]*" onChange={handleNumberOfProductsChange} />
          </div>
          <div>
            <label>Articles:</label>
            <select name="island_choice" id="islands" required onChange={handleProductChange}>
              <option value="">Faites votre choix</option>
              <option value="product1">VANILLE DE BONNE QUALITÉ</option>
              <option value="product2">HUILE ESSENTIELLE D'YLANG-YLANG</option>
              <option value="product3">BRACELET EN ARGENT</option>
            </select>
          </div>
          <span className='prixx'>
            <div>
              <label>Prix unitaire:</label>
              <input type="text" name="price" value={price + '' + '€'} readOnly />
            </div>
            <div>
              <label>Total:</label>
              <input type="text" name="total_price" value={totalPrice + '' + '€'} readOnly />
            </div>
          </span>
        </span>
        <h2>Paiement</h2>
        <label>moyen de paiement</label>
        <span className='validation'>
          <div>
            <input type="radio" name="paymentMethod" id="cash" checked={paymentMethod === 'cash'} onChange={() => handlePaymentChange('cash')} />
            <label htmlFor="cash">Sur Place</label>
          </div>
          <div>
            <input type="radio" name="paymentMethod" id="withdrawal" checked={paymentMethod === 'withdrawal'} onChange={() => handlePaymentChange('withdrawal')} />
            <label htmlFor="withdrawal">Par mobile money</label>
          </div>
        </span>
        <label>récuperation des articles</label>
        <span className='validation'>
          <div>
            <input type="radio" name="deliveryOption" id="home-delivery" checked={deliveryOption === 'home-delivery'} onChange={() => handleDeliveryOptionChange('home-delivery')} />
            <label htmlFor="home-delivery">Livraison</label>
          </div>
          <div>
            <input type="radio" name="deliveryOption" id="shop-pickup" checked={deliveryOption === 'shop-pickup'} onChange={() => handleDeliveryOptionChange('shop-pickup')} />
            <label htmlFor="shop-pickup">à la boutique</label>
          </div>
        </span>
        <input type="submit" value="envoyer" />
      </form>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </section>
  );
};

export default ContactUs;
