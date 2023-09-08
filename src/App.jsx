/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import Configurator from './components/Experience'
import { Suspense } from 'react';


function App() {

  return (
    
      <Canvas id="three-canvas-container">
       
       <color attach="background" args={["#262b2e"]} />
        <fog attach="fog" args={["#262b2e", 10, 20]} />
        <Suspense fallback={null}>
        <Experience/>
        </Suspense>
        <Configurator/>
      </Canvas>
      
    
  );
}

export default App
