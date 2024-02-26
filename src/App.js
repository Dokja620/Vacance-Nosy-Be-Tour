import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './pages/navbar';
import Footer from './pages/footer';
import Home from './pages/home';
import Circuit from './pages/circuit-nord';
import Store from './pages/store';
import Reservation from './pages/reservation';
import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <section id="no-scroll">
        <main>
          <Routes>
          <Route path="/" exact component={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/circuit-nord" element={<Circuit />} />
            <Route path="/boutique" element={<Store />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </main>
      <Footer></Footer>
      </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
