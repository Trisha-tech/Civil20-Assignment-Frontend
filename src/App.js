import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import HomePage from './AllPages/HomePage';
import BannerCarousel from './AllPages/BannerCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import slides from './mock.json';
import TopMovers from './AllPages/TopMovers';
import AllListTabs from './AllPages/AllListTabs';

function App() {
  return (
    <div>
      
      Welcome to Civil20 : Full Stack Assignment !!!    Made by Trisha Sahu
      <Navbar/>
      <BannerCarousel slides={slides}/>
    <TopMovers/>
    <br/><br/>
      <AllListTabs/>
    </div>
  );
}

export default App;
