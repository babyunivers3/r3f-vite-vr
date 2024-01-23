// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Baby from './components/Baby';
import Appy from './components/Appy';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Baby />} />
      <Route path="/Appy" element={<Appy />} />
      </Routes>
    </Router>
  );
};

export default App;
