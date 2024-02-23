import { OrbitControls, Point, PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import { Random } from 'random';
import React, { Suspense, useRef } from 'react'


// const Stars = (props) => {
//     const ref = useRef();
    
//   return (
    
//         <mesh  >
//             <directionalLight intensity={1.2} />
//             <ambientLight/>
//             <sphereGeometry args={[0.05, 32, 32]}  />
//             <meshStandardMaterial color={"orange"} />
//             <OrbitControls  />
//         </mesh>
    
//   )
// }

const StarsCanvas = () =>{
    const numberOfParticles = 500;
    return(
        <div className='z-[1] w-full h-auto inset-0 absolute' >
            <Canvas>
      <directionalLight intensity={1.2} />
      <ambientLight />
      {Array.from({ length: numberOfParticles }).map((_, index) => (
        <mesh key={index} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      ))}
      <OrbitControls />
    </Canvas>
        </div>
    )
}


export default StarsCanvas

{/* <Canvas>
                <Suspense fallback={null} >
                    <Stars/>
                </Suspense>
                <Preload all/>
            </Canvas> */}