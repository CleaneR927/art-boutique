import React from 'react';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import Intro from '../../widgets/Intro';
import Slider from '../../widgets/Slider';
import { sliderImages } from '../../assets/data/data';

function Home() {
  return (
    <>
      <Header />
      <Intro>
        <Slider images={sliderImages} />
      </Intro>
      <Footer />
    </>
  );
}

export default Home;
