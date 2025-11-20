import React from 'react';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';

export const SceneSetup: React.FC = () => {
  return (
    <>
      {/* Controls allow the user to rotate and zoom */}
      <OrbitControls 
        enablePan={false} 
        minPolarAngle={Math.PI / 4} 
        maxPolarAngle={Math.PI / 1.5}
        minDistance={3}
        maxDistance={10}
      />

      {/* Soft lighting setup */}
      <ambientLight intensity={0.7} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
        castShadow 
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#pink" />

      {/* Environment reflection for shiny parts (eyes/bow) */}
      <Environment preset="city" />

      {/* Shadows to ground the model */}
      <ContactShadows 
        resolution={1024} 
        scale={10} 
        blur={1.5} 
        opacity={0.25} 
        far={10} 
        color="#831843" 
      />
    </>
  );
};