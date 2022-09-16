/* eslint-disable no-use-before-define */
import React from 'react';

import '../dist/output.css';
import Navbar from './components/Navbar';
import Main from './containers/Main';
import Footer from './components/Footer';
import Proyectos from './containers/Proyectos';
import Work from './containers/Work';
import About from './containers/About';

export default function App() {
  return (
    <div style={appStyle}>
      <Navbar />
      <Main />
      <Work />
      <Proyectos />
      <About />
      <Footer />
    </div>
  );
}

const appStyle = {
  backgroundColor: '#ccc',
};
