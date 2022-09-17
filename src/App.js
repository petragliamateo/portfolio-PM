/* eslint-disable no-use-before-define */
import React from 'react';

import '../dist/output.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  About, Contact, Main, Proyectos, Work,
} from './containers';

export default function App() {
  return (
    <div style={appStyle}>
      <Navbar />
      <div className="h-12 w-full bg-black" />
      <Main />
      <Work />
      <Proyectos />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

const appStyle = {
  backgroundColor: '#ccc',
};
