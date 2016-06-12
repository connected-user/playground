import React from 'react';
import LandingCarousel from '../components/LandingCarousel';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer.js';
class Home extends React.Component {
  render() {
    return (
      <div className = "ri-carousel-page">
        <LandingCarousel/>
        <LandingHeader />
        <Footer/>
      </div>
    );
  }
}

export default Home;