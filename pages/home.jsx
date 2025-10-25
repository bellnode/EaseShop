// src/pages/Home.jsx
import React from 'react';
import Product from '../components/product';
import heroImg from '../assets/hero.png';

const Home = () => {
  return (
    <section className="py-10 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Product
          image={heroImg}
          name="Cool Headphones"
          price="99.99"
          description="Experience the best sound quality with our premium headphones."
        />
        <Product
          image={heroImg}
          name="Smart Watch"
          price="199.99"
          description="Track your fitness and stay connected in style."
        />
        <Product
          image={heroImg}
          name="Wireless Speaker"
          price="79.99"
          description="Portable and powerful speaker for all your music needs."
        />
      </div>
    </section>
  );
};

export default Home;
