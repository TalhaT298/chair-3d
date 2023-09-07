/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/chair.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF,useTexture } from '@react-three/drei'
import * as THREE from "three"

const Chair =(props) =>{
  const { nodes, materials } = useGLTF('./models/chair.gltf')
  const leatherTextureProps = useTexture({
    map:  "./textures/leather/Leather_008_Normal.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  leatherTextureProps.map.repeat.set(3,3);
  leatherTextureProps.normalMap.repeat.set(3,3);
  leatherTextureProps.roughnessMap.repeat.set(3,3);
  leatherTextureProps.aoMap.repeat.set(3,3);

  leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT =
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
  leatherTextureProps.roughnessMap.wrapS = leatherTextureProps.roughnessMap.wrapT =
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
  THREE.MirroredRepeatWrapping;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} >
        <meshStandardMaterial {...leatherTextureProps}/>
        </mesh>
      <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.064, 0.045]} />
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={false}/>
    </group>
  )
}

useGLTF.preload('./models/chair.gltf')

export default Chair;
