import React from 'react';
import { useProgress } from '@react-three/drei';

export const Loader: React.FC = () => {
  const { active, progress } = useProgress();
  
  if (!active) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-pink-50/80 z-50 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin mb-4"></div>
        <div className="text-pink-500 font-bold text-lg">Loading Kitty {Math.round(progress)}%</div>
      </div>
    </div>
  );
};