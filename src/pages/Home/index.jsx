import React from 'react';

import { useNavigate } from 'react-router-dom';

import { sliderImages } from '../../assets/data/data';
import AboutMe from '../../widgets/AboutMe';
import { userData } from '../../widgets/AboutMe/data';
import Gallery from '../../widgets/Gallery';
import Intro from '../../widgets/Intro';
import Slider from '../../widgets/Slider';

function Home() {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate('/gallery');
  };

  return (
    <>
      <Intro onClick={handleGalleryClick}>
        <Slider images={sliderImages} />
      </Intro>
      <Gallery onClick={handleGalleryClick} />
      <AboutMe data={userData} />
    </>
  );
}

export default Home;
