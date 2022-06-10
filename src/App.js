//import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import './site.css';
import './index.css';

import Navigation from './Navigation'
import Footer from './Footer'

import Home from './Home'
import About from './About'

function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
