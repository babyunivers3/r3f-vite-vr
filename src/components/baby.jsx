import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three'; // Import the THREE object
import { VRButton, XR } from '@react-three/xr';


const BabyCanvas = () => {
    const baby = useGLTF('./baby/babyy.gltf');
        // Assuming you have a texture in your GLTF model
        const texture = baby.scene.children[0].material.map;
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter; // or THREE.NearestMipmapLinearFilter
        
        // Adjust texture filtering settings
        texture.magFilter = THREE.LinearFilter; // or THREE.LinearFilter
        texture.minFilter = THREE.LinearFilter; // or THREE.LinearFilter
    

    return (
        <>
  <VRButton />
      <Canvas style={{width: '100vw', height: '100vh' }} className="cursor-pointer" camera={{ position: [5, 5, 5], fov: 90, near: 0.1, far: 200 }}>
      <XR mode="VR" />
      <primitive object={baby.scene} scale={10} />
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} color="white" castShadow />
        <OrbitControls autoRotate={false} enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
      </Canvas>

      </>
    );
  };

export default BabyCanvas;