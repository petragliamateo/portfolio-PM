/* eslint-disable no-use-before-define */
import React from 'react';

import '../dist/output.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Proyectos from './containers/Proyectos';
import Work from './containers/Work';

export default function App() {
  return (
    <div style={appStyle}>
      <Navbar />
      <Main />
      <Work />
      <Proyectos />
      <Footer />
    </div>
  );
}

const appStyle = {
  backgroundColor: '#ccc',
};
