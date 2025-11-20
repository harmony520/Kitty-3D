import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SceneSetup } from './components/SceneSetup';
import { HelloKitty } from './components/HelloKitty';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative background elements to enhance the "girly" vibe */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full h-full cursor-move">
        <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <SceneSetup />
            <HelloKitty />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-8 pointer-events-none text-pink-800/50 font-sans text-sm font-medium tracking-widest uppercase">
        created by Mo
      </div>
      
      <Loader />
    </div>
  );
};

export default App;