/* eslint-disable no-use-before-define */
import React, { useState } from 'react';

import '../dist/output.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useSlowScroll from './utils/hooks/useSlowScroll';
import Home from './pages/Home';
import PageContext from './contexts/PageContext';
import WorkPage from './pages/WorkPage';

export default function App() {
  const [pageData, setPageData] = useState({ actualPage: 'home' });
  const setPage = (page) => setPageData((prev) => ({ ...prev, actualPage: page }));
  useSlowScroll(['projects', 'about']);
  return (
    <PageContext.Provider value={setPageData}>
      <div style={appStyle}>
        <Navbar setPage={setPage} />
        <div className="h-16 w-full bg-black" />
        {pageData.actualPage === 'home' && <Home />}
        {pageData.actualPage === 'work' && <WorkPage pageData={pageData} />}
        <Footer />
      </div>
    </PageContext.Provider>
  );
}

const appStyle = {
  backgroundColor: '#ccc',
};
