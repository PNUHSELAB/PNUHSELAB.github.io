import { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const labels = [
  { text: 'Biomechanics', pos: [4, 3, 0], color: 'text-white' },
  { text: 'Cognitive Engineering', pos: [-3.5, 3.5, 1.5], color: 'text-[#8BFF9C]' },
  { text: 'Safety Engineering', pos: [3, -3.5, 2], color: 'text-white' },
  { text: 'HCI', pos: [-4, -2.5, -1.5], color: 'text-[#8BFF9C]' },
  { text: 'HAI', pos: [0, 4.5, -3], color: 'text-slate-200' },
];

// Component to load and display the GLB model
const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  const groupRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  // Rotate interactively based on cursor
  useFrame((state) => {
    if (groupRef.current) {
      targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, (state.pointer.y * Math.PI) / 8, 0.05);
      targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, (state.pointer.x * Math.PI) / 4, 0.05);
      
      groupRef.current.rotation.x = targetRotation.current.x;
      // Add a constant slow spin automatically
      groupRef.current.rotation.y = targetRotation.current.y + state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material.metalness = Math.max(0.3, child.material.metalness || 0);
          child.material.roughness = Math.min(0.7, child.material.roughness || 1);
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={3.8} position={[0, -2.5, 0]} />
    </group>
  );
};

useGLTF.preload('/brain_hologram.glb');

const BrainNodes = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Suspense fallback={<Html center><div className="text-white/70 font-bold whitespace-nowrap animate-pulse tracking-widest text-sm uppercase">Loading 3D Engine...</div></Html>}>
        <Model url="/brain_hologram.glb" />
      </Suspense>

      {labels.map((lbl, idx) => (
        <group key={`label-${idx}`} position={lbl.pos}>
          <Html distanceFactor={20} center zIndexRange={[100, 0]}>
            <div className={`px-5 py-2.5 rounded-full bg-slate-950/72 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/12 whitespace-nowrap font-bold ${lbl.color} text-base pointer-events-none transform transition-transform duration-500 hover:scale-110 tracking-wide`}>
              {lbl.text}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
};

const InteractiveBrain = () => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        shadows
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[10, 20, 10]} intensity={3.8} color="#ffffff" castShadow />
        <directionalLight position={[-10, 0, 10]} intensity={1.9} color="#93c5fd" />
        <pointLight position={[-15, -10, -10]} intensity={7} color="#22c55e" distance={50} />
        <pointLight position={[15, 0, -10]} intensity={5} color="#2563eb" distance={50} />
        <spotLight position={[0, 15, 5]} intensity={5.5} angle={0.5} penumbra={0.5} color="#ffffff" />

        <Environment preset="city" />
        <BrainNodes />

        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          dampingFactor={0.05}
        />

        <ContactShadows position={[0, -4, 0]} opacity={0.28} scale={16} blur={3.2} far={7} color="#020617" />
      </Canvas>
    </div>
  );
};

export default InteractiveBrain;
