import { useRef , React, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls , shaderMaterial} from '@react-three/drei'
import * as THREE from 'three'
import { PointLightHelper, CameraHelper } from "three";
import { useHelper } from "@react-three/drei";


// const Cylinder = (position, side, color) => {
//   const ref = useRef();
//   useFrame((state, delta) => {      //useFrame is a hook that runs every frame
//     ref.current.rotation.z += delta;
//       ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
//   });

//   return (
//     <mesh ref={ref} position={[0, 0, 0]} rotation={[0, 0, 0]}>
//       <cylinderGeometry args={[0.5, 0.5, 0.5, 30, 30, true]} />
//       <meshStandardMaterial side={THREE.DoubleSide}  color={"orange"}/>
//     </mesh>
//   )
// };

//Sphere geometry
// function Sphere(){
//   const ref = useRef();
//   useFrame((state, delta) => {
//     ref.current.rotation.y += delta;
//   });

//   return (
//     <mesh ref={ref} position={[0, 0, 0]} rotation={[0, 0, 0]}>
//       <sphereGeometry args={[0.6, 30, 20]} />
//       <meshShaderMaterial color={'purple'}/>
//     </mesh>
//   )
// };



// const Scence = () => {
//   return (
//       <mesh>
//         <planeGeometry args={[0.5, 0.5]} />  {/* a planeBufferGeometry is a flat surface , that takes 2 args i.e height and width*/}
//         <waveShaderMaterial />
//       </mesh>
//   );
// };


// Custom component to add a shadow camera helper
const LightShadowCameraHelper = () => {
  const lightRef = useRef(); // Reference for the light

  useEffect(() => {
    if (lightRef.current) {
      // Logs for debugging
      console.log("Light ref exists:", lightRef.current);
    }
  }, [lightRef.current]);

  // Safeguard to ensure the ref is not undefined
  useHelper(lightRef, CameraHelper);

  return (
    <pointLight
      ref={lightRef}
      castShadow
      position={[0, 10, 4]}
      shadow-camera-near={0.5}
      shadow-camera-far={500}
    />
  );
};



function App() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  var aspect = w / h;
  return (
    <main className="w-full h-screen bg-black">
      <Canvas camera={{ fov: 20, aspect: aspect, near: 0.1, far: 10 }}>
      <OrbitControls />
      <ambientLight />
      <directionalLight  position={[0,0,2]} intensity={5}/>

      {/* Cylinder cylinderGeometry */}
      {/* <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>    //a mesh requires a geometry and a material
          <cylinderGeometry args={[0.5, 0.5, 0.5, 30, 30, true]} />
          <meshStandardMaterial side={THREE.DoubleSide} />
        </mesh> */}

      {/* <Cylinder /> */}

      {/* <Sphere /> */}



      <Scence />
      </Canvas>

    </main>
  )
}

export default App
