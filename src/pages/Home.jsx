import React from 'react';
import Banner from '../components/Home/Banner';


import Bannerbottom from '../components/Home/Bannerbottom';
import Features from '../components/Home/Features';
import FeaturesBottom from '../components/Home/FeaturesBottom';
import OurUser from '../components/Home/OurUser';
import ConnectWithUs from '../components/Home/ConnectWithUs';
const Home = ({activeNav}) => {
  activeNav("home");
    
  return (
    <div className=' bg-gray'>
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
      {/* connect with us */}
      <ConnectWithUs/>
    </div>
  );
}

export default Home;
