import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Product from './components/product';
import Categories from './components/categories';
import Offers from './components/offers';
import About from './components/about';
import Contact from './components/contact';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
