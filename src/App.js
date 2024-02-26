import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './pages/navbar';
import Footer from './pages/footer';
import Home from './pages/home';
import Circuit from './pages/circuit-nord';
import Store from './pages/store';
import Reservation from './pages/reservation';
import Iles from './pages/islands';
import Achat from './pages/buy';
import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <section id="no-scroll">
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/Acceuil" />} />
              <Route path="/Acceuil" element={<Home />} />
              <Route path="/circuit-nord" element={<Circuit />} />
              <Route path="/boutique" element={<Store />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/iles" element={<Iles />} />
              <Route path="/achat" element={<Achat />} />
            </Routes>
          </main>
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
