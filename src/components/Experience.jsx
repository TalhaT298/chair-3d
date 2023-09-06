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

import React from 'react';
import { PresentationControls } from '@react-three/drei';

const Experience = () => {
    return (
        <>
        <PresentationControls
           speed={1.5}
           global
           zoom={0.7}
            polar={[-0.1, Math.PI / 4]}
            rotation={[Math.PI / 8, Math.PI / 4, 0]}
         >
            
        <mesh>
            {/* <sphereGeometry args={[1,32,32]}/>
            <meshStandardMaterial color="#ffffff"/> */}
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
        </PresentationControls>
        <ambientLight args={["#ffffff" ,1]}/>
        </>
    );
};

export default Experience;