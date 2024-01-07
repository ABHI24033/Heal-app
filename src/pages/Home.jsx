import React from 'react';
import Banner from '../components/Home/Banner';


import Bannerbottom from '../components/Home/Bannerbottom';
import Features from '../components/Home/Features';
import FeaturesBottom from '../components/Home/FeaturesBottom';
import OurUser from '../components/Home/OurUser';
const Home = ({activeNav}) => {
  activeNav("home");
    
  return (
    <div>
      {/* banner */}
      <Banner/>
      {/* banner bottom */}
      <Bannerbottom/>
      {/* Features */}
      <Features/>
      {/* Green Part */}
      <FeaturesBottom/>
      {/* our users */}
      <OurUser/>
    </div>
  );
}

export default Home;
