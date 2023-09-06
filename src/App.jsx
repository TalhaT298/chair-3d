/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import { Suspense } from 'react';


function App() {

  return (
    
      <Canvas id="three-canvas-container">
       
       <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213547", 10, 20]} />
        <Suspense fallback={null}>
        <Experience/>
        </Suspense>
      </Canvas>
    
  );
}

export default App
