import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

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

  // Enable shadows inside the model and tweak materials for deeper, richer visibility
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
         child.castShadow = true;
         child.receiveShadow = true;
         // Ensure materials react strongly to light for better visibility
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
      {/* Drastically increased scale from 1.5 to 3.8 and adjusted position for better centering */}
      <primitive object={scene} scale={3.8} position={[0, -2.5, 0]} />
    </group>
  );
}

// Preload the model so there's no popping delay
useGLTF.preload('/brain_hologram.glb');

const BrainNodes = () => {
  // Main research areas
  const labels = [
    { text: "Biomechanics", pos: [4, 3, 0], color: "text-slate-900" },
    { text: "Cognitive Engineering", pos: [-3.5, 3.5, 1.5], color: "text-hse-green" },
    { text: "Safety Engineering", pos: [3, -3.5, 2], color: "text-slate-900" },
    { text: "HCI", pos: [-4, -2.5, -1.5], color: "text-hse-green" },
    { text: "HAI", pos: [0, 4.5, -3], color: "text-slate-500" }
  ];

  const groupRef = useRef();
  
  // Rotate the labels slowly around the model
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      // Gentle bobbing effect for labels
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Model with Loading Suspense */}
      <Suspense fallback={<Html center><div className="text-gray-400 font-bold whitespace-nowrap animate-pulse tracking-widest text-sm uppercase">Loading 3D Engine...</div></Html>}>
         <Model url="/brain_hologram.glb" />
      </Suspense>

      {/* Main Research Nodes and Labels */}
      {labels.map((lbl, idx) => (
        <group key={`label-${idx}`} position={lbl.pos}>
            {/* HTML Label connecting to positions */}
            <Html distanceFactor={20} center zIndexRange={[100, 0]}>
                <div className={`px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border border-gray-100/50 whitespace-nowrap font-bold ${lbl.color} text-base pointer-events-none transform transition-transform duration-500 hover:scale-110 tracking-wide`}>
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
    <div className="w-full h-[50vh] md:h-screen cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} shadows>
        
        {/* Highly Saturated, Deep Lighting Setup for Strong Visibility */}
        <ambientLight intensity={1.5} />
        {/* Main sharp directional light for strong shadows/highlights */}
        <directionalLight position={[10, 20, 10]} intensity={3.5} color="#ffffff" castShadow />
        <directionalLight position={[-10, 0, 10]} intensity={1.5} color="#ffffff" />
        {/* Colored rim lights for that 'HSE' neon green/blue feel, boosted intensity */}
        <pointLight position={[-15, -10, -10]} intensity={6} color="#14b8a6" distance={50} />
        <pointLight position={[15, 0, -10]} intensity={4} color="#0f172a" distance={50} />
        <spotLight position={[0, 15, 5]} intensity={5} angle={0.5} penumbra={0.5} color="#ffffff" />
        
        {/* HDRI Environment for realistic reflections */}
        <Environment preset="city" />

        <BrainNodes />
        
        <OrbitControls 
            enableZoom={false} /* Locked size as requested */
            enablePan={false}
            enableRotate={true}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
            dampingFactor={0.05}
        />
        
        {/* Ground shadow for a grounded, heavy chic look */}
        <ContactShadows position={[0, -4, 0]} opacity={0.7} scale={20} blur={2.5} far={8} color="#0f172a" />
      </Canvas>
    </div>
  );
};

export default InteractiveBrain;
