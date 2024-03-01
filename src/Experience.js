import {extend,useThree, useFrame} from '@react-three/fiber'
import {useRef} from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/orbitControls.js'

import CustomObject  from './CustomObject'
extend({OrbitControls: OrbitControls})

export default function Experience()
{
    const cubeRef= useRef()

    const groupRef= useRef()
    const {camera,gl}= useThree()

    useFrame((state,delta)=>{

        const angle= state.clock.elapsedTime
        state.camera.position.x= Math.sin(angle) * 10
        state.camera.position.z= Math.cos(angle) * 10
        state.camera.lookAt(0,0,0)

        cubeRef.current.rotation.y += delta


        // groupRef.current.rotation.y += delta
    })
    return <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        <directionalLight position= { [1,2,3] } intensity={5} />
        <ambientLight intensity={1.5} />
        
        
        
         <mesh rotation-x={-Math.PI * 0.5} position-y ={-1}  scale={10}>
            <planeGeometry  />
            <meshStandardMaterial  color="green" />
        </mesh>
    <group ref={groupRef}>
        <mesh  position-x ={-2} >
            <sphereGeometry  />
            <meshStandardMaterial  color="orange"  wireframe />
        </mesh>
   

        <mesh  ref={cubeRef} rotation-y={Math.PI *0.25} position-x ={2} scale={1.5}>
            <boxGeometry color="blue"  />
            <meshStandardMaterial  color="purple"  />
        </mesh>
    </group>

       
    <CustomObject />

    </>
}
 