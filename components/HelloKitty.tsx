import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Colors based on the classic design
const COLORS = {
  fur: '#FFFFFF',
  bow: '#EF4444', // Red-500
  eyes: '#1F2937', // Gray-800 (Soft black)
  nose: '#FBBF24', // Amber-400
  whiskers: '#1F2937'
};

const Whisker: React.FC<{ position: [number, number, number], rotation: [number, number, number] }> = ({ position, rotation }) => (
  <mesh position={position} rotation={rotation} castShadow>
    <capsuleGeometry args={[0.035, 0.55, 4, 8]} />
    <meshStandardMaterial color={COLORS.whiskers} roughness={0.8} />
  </mesh>
);

export const HelloKitty: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle idle animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.4}>
      <group ref={groupRef} dispose={null} scale={1.4}>
        
        {/* HEAD: A wide, oblate spheroid (squashed sphere) */}
        {/* Widened X, Flattened Y, Depth Z */}
        <mesh position={[0, 0, 0]} scale={[1.8, 1.35, 1.3]} castShadow receiveShadow>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial 
            color={COLORS.fur} 
            roughness={0.3} 
            metalness={0.1} 
          />
        </mesh>

        {/* EARS - Changed to Spheres for a "round cat ear" look (Plush style) */}
        {/* Left Ear */}
        <mesh position={[-1.2, 0.9, -0.2]} rotation={[0, 0, 0.5]} scale={[0.5, 0.6, 0.4]} castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={COLORS.fur} roughness={0.3} />
        </mesh>
        {/* Right Ear */}
        <mesh position={[1.2, 0.9, -0.2]} rotation={[0, 0, -0.5]} scale={[0.5, 0.6, 0.4]} castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={COLORS.fur} roughness={0.3} />
        </mesh>

        {/* FACE DETAILS */}
        {/* Z-position pushed forward to approx 1.15 ~ 1.25 to clear the head surface which is at Z~1.3 at center but tapers */}
        <group position={[0, -0.1, 1.28]}>
          
          {/* Left Eye */}
          <mesh position={[-0.75, 0, 0]} rotation={[0.1, -0.35, 0]}>
            <capsuleGeometry args={[0.12, 0.18, 4, 16]} />
            <meshStandardMaterial color={COLORS.eyes} roughness={0.2} metalness={0.6} />
          </mesh>

          {/* Right Eye */}
          <mesh position={[0.75, 0, 0]} rotation={[0.1, 0.35, 0]}>
            <capsuleGeometry args={[0.12, 0.18, 4, 16]} />
            <meshStandardMaterial color={COLORS.eyes} roughness={0.2} metalness={0.6} />
          </mesh>

          {/* Nose - Centered */}
          <mesh position={[0, -0.25, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
            <capsuleGeometry args={[0.095, 0.16, 4, 16]} />
            <meshStandardMaterial color={COLORS.nose} roughness={0.3} metalness={0.2} />
          </mesh>

          {/* Whiskers */}
          {/* Left Whiskers */}
          <group position={[-1.55, -0.1, -0.2]} rotation={[0, 0.5, 0.1]}>
             <Whisker position={[0, 0.22, 0]} rotation={[0, 0, 1.45]} />
             <Whisker position={[0, 0, 0]} rotation={[0, 0, 1.57]} />
             <Whisker position={[0, -0.22, 0]} rotation={[0, 0, 1.7]} />
          </group>

          {/* Right Whiskers */}
          <group position={[1.55, -0.1, -0.2]} rotation={[0, -0.5, -0.1]}>
             <Whisker position={[0, 0.22, 0]} rotation={[0, 0, -1.45]} />
             <Whisker position={[0, 0, 0]} rotation={[0, 0, -1.57]} />
             <Whisker position={[0, -0.22, 0]} rotation={[0, 0, -1.7]} />
          </group>
        </group>

        {/* THE BOW (Red) */}
        {/* Moved forward (Z) and adjusted to sit on the Right Ear area */}
        <group position={[1.1, 0.95, 0.6]} rotation={[0.2, -0.2, -0.4]} scale={1.1}>
          {/* Center Knot */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.24, 32, 32]} />
            <meshStandardMaterial color={COLORS.bow} roughness={0.3} metalness={0.2} />
          </mesh>
          {/* Left Loop */}
          <mesh position={[-0.38, 0, 0]} scale={[1.2, 1, 0.8]}>
             <sphereGeometry args={[0.28, 32, 32]} />
             <meshStandardMaterial color={COLORS.bow} roughness={0.3} metalness={0.2} />
          </mesh>
          {/* Right Loop */}
          <mesh position={[0.38, 0, 0]} scale={[1.2, 1, 0.8]}>
             <sphereGeometry args={[0.28, 32, 32]} />
             <meshStandardMaterial color={COLORS.bow} roughness={0.3} metalness={0.2} />
          </mesh>
        </group>

      </group>
    </Float>
  );
};