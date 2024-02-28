import React, { useState } from 'react';
import islandData from './data/islands.json';
import { NavLink } from "react-router-dom";

// Import your images here
import img1 from './data/imgs/komba/komba-7.webp';
import img2 from './data/imgs/tanikely/tanikely-8.webp';
import img3 from './data/imgs/iranja/iranja-7.webp';
import img4 from './data/imgs/sakatia/sakatia-7.webp';
import img5 from './data/imgs/lokobe/lokobe-1.webp';
import check from '../assets/imgs/check.svg';

const Island = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(img1); // Set initial image

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
    // Set image based on currentIndex
    switch (index) {
      case 0:
        setCurrentImage(img1);
        break;
      case 1:
        setCurrentImage(img2);
        break;
      case 2:
        setCurrentImage(img3);
        break;
      case 3:
        setCurrentImage(img4);
        break;
      case 4:
        setCurrentImage(img5);
        break;
      default:
        setCurrentImage(img1); // Default to img1
        break;
    }
  };

  return (
    <div>
      <section id="island">
        {/* Buttons to switch between trips */}
        <div className="switch">
          <p>Quelles îles souhaitez-vous visiter ?</p>
          {islandData.map((island, index) => (
            <button key={index} onClick={() => handleButtonClick(index)}>
              {island.name}
            </button>
          ))}
        </div>

        {islandData[currentIndex] && (
          <div className="trip">
            <div className="left">
              <div className="box desc">
                <h2>Description</h2>
                <p style={{ textAlign: 'justify' }}>{islandData[currentIndex].description}</p>
              </div>
              <div className="box">
                <p>durée du trajet:</p><br />
                <p>{islandData[currentIndex]['travel-duration']}</p><br />
                <p>départ:</p><br />
                <p>{islandData[currentIndex].schedule}</p>
              </div>
            </div>
            <div className="middle">
              <h3>{islandData[currentIndex].name} ?</h3>
              <div className="view">
                <img src={currentImage} alt={`${islandData[currentIndex].name}`} />
              </div>
              {/* <div className="arrow lft"><img src="../imgs/arrow.svg" alt="" /></div>
              <div className="arrow rgt"><img src="../imgs/arrow.svg" alt="" /></div> */}
                <NavLink to='/reservation' className='menu-link'>
                  <div className="booking">
                    <p>réserver une excursion</p>
                  </div>
                </NavLink>
            </div>
            <div className="right">
              <div className="box">
                <h2 className="in">inclus dans <br /> l'excursion</h2>
                {islandData[currentIndex].included.map((item, i) => (
                  <div className="div" key={i}>
                    <span><img src={check} alt="" /></span><p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="box" style={{ textAlign: 'center' }}>
                <h2>prix</h2>
                <p>{islandData[currentIndex].price} € par personne</p><br />
                <p>{islandData[currentIndex]['group-price']} € prix de groupe <br /> (+5 personnes)</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Island;