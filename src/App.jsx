import React from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import GalleryPage from './pages/Gallery';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './widgets/Footer';
import Header from './widgets/Header';

import './assets/styles/index.scss';

function App() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer handleHome={handleHome} />
    </>
  );
}

export default App;
