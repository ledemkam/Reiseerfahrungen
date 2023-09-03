import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Offers from './components/Offers.jsx';
import Plan from './components/Plan.jsx';
import Rooms from './components/Rooms.jsx';
import ImageSlider from './components/ImageSlider.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </React.Fragment>
  );
}

export default App;
