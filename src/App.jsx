import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'

function App() {

  return (
    <div className='App'>
      <Canvas>
        <Experience/>
      </Canvas>
    </div>
  );
}

export default App
