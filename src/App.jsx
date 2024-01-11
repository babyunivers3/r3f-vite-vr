// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import ChatButton from './components/ChatButton';
import CreateButton from './components/CreateButton';

const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Canvas>
      {/* Your 3D scene components go here */}


      {/* UI component */}
      <ChatButton onClick={handleButtonClick} label="Chat" />
      <CreateButton onClick={handleButtonClick} label="Create" />
    </Canvas>
  );
};

export default App;
