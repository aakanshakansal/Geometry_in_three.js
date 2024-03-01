import './style.css'
import Experience from './Experience'
import * as THREE from 'three'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
       dpr={ [1,2] }
        gl = { { 
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace
        }}
        camera={ { 
            fov:45,
            near:0.1, 
            far :200,
            position: [3,2,6]
            }}
        
        >
        <mesh>
           <Experience />

        </mesh>
         
    </Canvas>
    </>
)