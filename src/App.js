import React from 'react';
import Navbar from './components/Navbar.js';
import BannerCarousel from './AllPages/BannerCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMovers from './AllPages/TopMovers';
import AllListTabs from './AllPages/AllListTabs';

function App() {
  return (
    <div>
      <Navbar />
      <BannerCarousel />
      <TopMovers />
      <br /><br />
      <AllListTabs />
    </div>
  );
}

export default App;
