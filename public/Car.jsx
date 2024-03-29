/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 car.gltf 
Author: Joko_P (https://sketchfab.com/joko_p)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/65-chevy-malibu-170df9c498a84dcea040985871ee4e67
Title: '65 Chevy Malibu
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/car.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.05, 0]}>
        <group position={[0, 0.05, 0]}>
          <mesh geometry={nodes.Object_78.geometry} material={materials.Black_PlasticMetal} />
          <mesh geometry={nodes.Object_80.geometry} material={materials.Bolt_Chrome} />
          <mesh geometry={nodes.Object_81.geometry} material={materials.Bolt_Chrome_Darker} />
          <mesh geometry={nodes.Object_83.geometry} material={materials.Tires} />
          <mesh geometry={nodes.Object_84.geometry} material={materials.Tires_Yellow} />
          <mesh geometry={nodes.Object_86.geometry} material={materials.Chrome} />
          <mesh geometry={nodes.Object_88.geometry} material={materials.Black_PlasticMetal} />
          <mesh geometry={nodes.Object_90.geometry} material={materials.Bolt_Chrome} />
          <mesh geometry={nodes.Object_91.geometry} material={materials.Bolt_Chrome_Darker} />
          <mesh geometry={nodes.Object_93.geometry} material={materials.Tires} />
          <mesh geometry={nodes.Object_94.geometry} material={materials.Tires_Yellow} />
          <mesh geometry={nodes.Object_96.geometry} material={materials.Chrome} />
        </group>
        <mesh geometry={nodes.Object_5.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Black_PlasticMetal} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.White_PlasticMetal} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Red_PlasticMetal} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Glass_Red_Distorted} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Bolt_Chrome} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Black_PlasticMetal} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Mirrors} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.Reflector} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Headlights} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.Chrome_Darker} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.Glass_Orange_Distorted} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.Black_PlasticMetal} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.Chrome_Darker} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.Headlights_Glass_Distorted_Rear} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_75.geometry} material={materials.Undercarriage} />
        <mesh geometry={nodes.Object_99.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_101.geometry} material={materials.Window_Glass_Clear} />
        <mesh geometry={nodes.Object_103.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_105.geometry} material={materials.Window_Glass_Clear} />
        <mesh geometry={nodes.Object_107.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_109.geometry} material={materials.Window_Glass_Clear} />
        <mesh geometry={nodes.Object_111.geometry} material={materials.Chrome} scale={[1, 1.032, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/car.gltf')
