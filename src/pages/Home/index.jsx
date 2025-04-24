import React from 'react';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import Intro from '../../widgets/Intro';
import Slider from '../../widgets/Slider';
import { sliderImages } from '../../assets/data/data';
import Gallery from '../../widgets/Gallery';
import AboutMe from '../../widgets/AboutMe';
import { userData } from '../../widgets/AboutMe/data';

function Home() {
  return (
    <>
      <Header />
      <Intro>
        <Slider images={sliderImages} />
      </Intro>
      <Gallery />
      <AboutMe data={userData} />
      <Footer />
    </>
  );
}

export default Home;
