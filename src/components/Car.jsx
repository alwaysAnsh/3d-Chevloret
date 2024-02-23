import React from 'react'
import {Environment, OrbitControls, Sparkles, useGLTF} from '@react-three/drei'
import { useRef, useState } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'


const Car = () => {
  const car = useGLTF('../../public/car.gltf')
  return (
    <primitive
        object={car.scene}
        scale={1.3}
              />
  )
}

const CarCanvas = ({ scale = Array.from({ length: 50 }, () => 0.5 + Math.random() * 4) })=> {

return (
  <Canvas 
          shadows
            camera={
              {
                fov:85,
                position: [-4, 2, -4]
              }
            }
          >
            <ambientLight/>
             <Sparkles count={scale.length} size={scale} position={[0, 0.9, 0]} scale={[4, 1.5, 4]} speed={0.3} />
            <OrbitControls enableZoom = {false} maxPolarAngle={Math.PI/2} autoRotate />
            <ambientLight intensity={0.7} />
            <Suspense fallback={null} >
              <mesh  >
              <Car/>
              </mesh>
            </Suspense>
            <Environment preset='sunset' />
          </Canvas>
)
  
}


export default CarCanvas;

