/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'

import { Suspense } from 'react';
import Configurator from './components/Configurator';
import { CustomizationProvider } from './contexts/Customization';



function App() {

  return (
    <CustomizationProvider>
     <div className='App'>
       <Canvas id="three-canvas-container">
       <color attach="background" args={["#262b2e"]} />
        <fog attach="fog" args={["#262b2e", 10, 20]} />
        <Suspense fallback={null}>
        <Experience/>
        </Suspense>
      </Canvas>
      <Configurator/>
     </div>
     </CustomizationProvider>
      
      
    
  );
}

export default App
