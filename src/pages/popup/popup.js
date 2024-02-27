import React, { useState, useEffect, useRef } from 'react';

const Popup = ({ onClose }) => {
  const [closing, setClosing] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setClosing(true);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setClosing(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(() => {
        onClose();
      }, 250); // Match the duration of fade-out animation

      return () => clearTimeout(timeout);
    }
  }, [closing, onClose]);

  const handleClose = () => {
    setClosing(true);
  };

  return (
    <div className={`popup ${closing ? 'fade-out' : ''}`} ref={popupRef}>
      <h2>Merci d'avoir choisi Vacance Nosy-be Tour!</h2>
      <p>un e-mail confirmant votre reservation vous seras de suite envoyé!</p>
      <button onClick={handleClose}>D'accord</button>
    </div>
  );
};

export default Popup;
