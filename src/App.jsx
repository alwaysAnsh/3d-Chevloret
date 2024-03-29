import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Suspense } from 'react'
import {Environment, MeshDistortMaterial, OrbitControls, Sparkles, useGLTF} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CarCanvas from './components/Car'
import StarsCanvas from './components/Stars'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'


function App({ scale = Array.from({ length: 50 }, () => 0.5 + Math.random() * 4) }) {
  
  // const car = useGLTF('../public/car.gltf')

  return (
    <>
      <div className=' md:flex md:flex-row md:items-center md:w-11/12 md:mx-auto md:justify-evenly md:h-screen flex flex-col-reverse gap-9 overflow-hidden  ' >
      {/* <StarsCanvas/> */}
        <div className='md:flex md:flex-col md:gap-12 ml-4 flex flex-col gap-8 mb-8 ' >
          <p className='text-white font-orbitron md:text-4xl text-3xl font-bold overflow-y-hidden ' >Welcome to </p>
          <motion.p 
          initial={{opacity:0, scale:0.6}}
          animate={{opacity:1, scale:1}}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          className=' font-sixtyfour uppercase md:text-5xl text-4xl  text-lightorange ' >chevloret</motion.p>
          <p className='text-slate-300 font-orbitron  opacity-70 ' >The Dream Car of every enthusiast. You got a racer in you!! then we got you covered. </p>
          <p className='text-slate-300 font-orbitron w-[90%] opacity-70 space-x-2' >
          <TypeAnimation
              sequence={[
               'Grab',
               200,
               'Grab your',
               200,
               'Grab your deal',
               200,
               'Grab your deal now!!',
               100,
               'Grab your deal',
               100,
               'Grab your',
               100,
               'Grab your',
               100,
               'Grab',
               100,
               '',
               100,
               

              ]}
              repeat={Infinity}
            />
          </p>
        
          {/* <button className='border-2 border-white text-white' >Deal</button> */}
        </div>

        <div className='md:w-full relative z-0  md:h-full h-screen w-full md:overflow-x-hidden overflow-x-scroll  ' >
          <CarCanvas/>
        </div>
      </div>
      
    </>
  )
}

export default App
