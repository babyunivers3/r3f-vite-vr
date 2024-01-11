// CustomButton.js
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { GradientTexture, Text } from '@react-three/drei';

const ChatButton = ({ onClick, label }) => {
  const buttonRef = useRef();
  const [ setHover] = useState(false);

  useFrame(() => {
    buttonRef.current.rotation.x += 0.01;
    buttonRef.current.rotation.y += 0.01;
  });

  return (
    <mesh
    position={[3, -1, 1]}
      scale={[.75, .75, .75]}
      ref={buttonRef}
      onClick={onClick}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      
    >
      <boxGeometry args={[2, 0.5, 0.1]} />
      
      <meshBasicMaterial >
      <GradientTexture
      stops={[0, 1]} // As many stops as you want
      colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
      size={1024} // Size is optional, default = 1024
    />
      </meshBasicMaterial>
      {/* Use Text component for displaying text */}
      <Text position={[0, 0, 0.1]} color="black" fontSize={0.5}>
         {label} </Text>
         // Display the same text on the back side of the button
         <Text position={[0, 0, -0.1]} color="black" fontSize={0.5}>
         {label} </Text>
    </mesh>
    
  );
};

export default ChatButton;
