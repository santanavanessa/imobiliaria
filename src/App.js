import React from 'react';

// Import routes and rout
 
import { Routes, Route } from 'react-router-dom';

//Import components
import Header from './components/Header';
import Footer from './components/Footer';

//Import pages

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return <div className='max-w-[1440px] mx-auto bg-white'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/property/:id' element={<PropertyDetails/>} />
    </Routes>
    <Footer/>
  </div>;
};

export default App;
