/* eslint-disable no-use-before-define */
import React, { useState } from 'react';

import '../dist/output.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useSlowScroll from './utils/hooks/useSlowScroll';
import Home from './pages/Home';

export default function App() {
  const [page, setPage] = useState('home');
  useSlowScroll(['projects', 'about']);
  return (
    <div style={appStyle}>
      <Navbar setPage={setPage} />
      <div className="h-12 w-full bg-black" />
      {page === 'home' && <Home />}
      <Footer />
    </div>
  );
}

const appStyle = {
  backgroundColor: '#ccc',
};
