import React from 'react';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import Intro from '../../widgets/Intro';
import Slider from '../../widgets/Slider';
import { sliderImages } from '../../assets/data/data';
import Gallery from '../../widgets/Gallery';

function Home() {
  return (
    <>
      <Header />
      <Intro>
        <Slider images={sliderImages} />
      </Intro>
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
