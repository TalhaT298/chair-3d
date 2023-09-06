/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// import { PresentationControls } from '@react-three/drei';
// import React from 'react';
// import { Stage } from 'react-three-fiber';

// const Experience = () => {
//     return (
//         <PresentationControls
//             speed={1.5}
//             global
//             zoom={0.7}
//             polar={[-0.1, Math.PI / 4]}
//             // rotation={[Math.PI / 8, Math.PI / 4, 0]}
//         >
           
//                 <Stage environment={"city"} intensity={0.6} castShadow={false}>
//                     {/* Add your Stage content here */}
//                 <mesh>
//                     <boxGeometry />
//                     <meshNormalMaterial />
//                 </mesh>
//                 </Stage>
//         </PresentationControls>
//     );
// };

// export default Experience;

// import React from 'react';
// import { PresentationControls } from '@react-three/drei';
// import { Stage } from 'react-three-fiber';

// const Experience = () => {
//     return (
//         <>
//         <mesh>
//             <sphereGeometry  args={[1,32,32]}/>
//             <meshStandardMaterial color="#ffffff" />
//         </mesh>
//         <ambientLight args={["#ffffff",1]}/>
//         </>
        
//     )
// };

// export default Experience;

import React, { Suspense } from 'react';
import { Float, MeshReflectorMaterial, PresentationControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Experience = () => {
    const gltf = useLoader(GLTFLoader, "./models/chair.gltf")
    return (
        <>
        <PresentationControls
           speed={1.5}
           global
           zoom={0.7}
            polar={[-0.1, Math.PI / 4]}
            rotation={[Math.PI / 8, Math.PI / 4, 0]}
         >
          {/* <Float
          speed={1}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0,1]}
          
          > */}
            <Suspense fallback={null}>
            <primitive object={gltf.scene}/>
        </Suspense>  
        <mesh>
            {/* <sphereGeometry args={[1,32,32]}/>
            <meshStandardMaterial color="#ffffff"/> */}
            {/* <boxGeometry />
            <meshNormalMaterial /> */}
        </mesh>
        {/* </Float> */}
        {/* <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          /> */}

        </PresentationControls>
        <ambientLight args={["#ffffff" ,1]}/>
        </>
    );
};

export default Experience;