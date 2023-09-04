import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import { Suspense } from 'react';


function App() {

  return (
    
      <Canvas id="three-canvas-container">
        <Suspense fallback={null}>
        <Experience/>
        </Suspense>
      </Canvas>
    
  );
}

export default App
