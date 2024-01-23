// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BabyCanvas from './components/baby';
import Appy from './components/Appy';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/Appy" element={<Appy />} />
        <Route path="/" component={BabyCanvas} />
      </Routes>
    </Router>
  );
};

export default App;
