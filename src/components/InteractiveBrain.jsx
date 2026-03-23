import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Line, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const BrainNodes = () => {
  const groupRef = useRef();
  
  const targetRotation = useRef({ x: 0, y: 0 });

  // Rotate the entire brain system interactively based on cursor
  useFrame((state) => {
    if (groupRef.current) {
      // Target rotation based on pointer (-1 to +1 range)
      // Dividing by 4 gives a nice subtle range of motion
      targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, (state.pointer.y * Math.PI) / 8, 0.05);
      targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, (state.pointer.x * Math.PI) / 4, 0.05);
      
      groupRef.current.rotation.x = targetRotation.current.x;
      groupRef.current.rotation.y = targetRotation.current.y + state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  // Generate random points for the base "brain" structure
  const [positions, lines] = useMemo(() => {
    const pts = [];
    const lns = [];
    const nodeCount = 80;
    
    // Create random points in a rough spherical/brain shape
    for (let i = 0; i < nodeCount; i++) {
        // Use spherical coordinates to keep it somewhat rounded
        const radius = 2 + Math.random() * 0.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        // Slightly flatten the sphere to look more like a brain
        const x = radius * Math.sin(phi) * Math.cos(theta) * 0.8;
        const y = radius * Math.cos(phi) * 0.7;
        const z = radius * Math.sin(phi) * Math.sin(theta);
        
        pts.push(new THREE.Vector3(x, y, z));
    }

    // Connect some nearby points to form a network
    for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
            if (pts[i].distanceTo(pts[j]) < 1.2 && Math.random() > 0.5) {
                lns.push([pts[i], pts[j]]);
            }
        }
    }
    
    // Format points for PointMaterial
    const positionsArray = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => {
      positionsArray[i * 3] = p.x;
      positionsArray[i * 3 + 1] = p.y;
      positionsArray[i * 3 + 2] = p.z;
    });

    return [positionsArray, lns];
  }, []);

  // Main research areas
  const labels = [
    { text: "Biomechanics", pos: [2.5, 1.5, 0], color: "text-hse-blue" },
    { text: "인지공학", pos: [-2, 2, 1], color: "text-hse-green" },
    { text: "안전공학", pos: [1.5, -2, 1.5], color: "text-hse-blue" },
    { text: "HCI", pos: [-2.5, -1, -1], color: "text-hse-green" },
    { text: "HAI", pos: [0, 2.5, -2], color: "text-blue-500" }
  ];

  return (
    <group ref={groupRef}>
      {/* Base network lines */}
      {lines.map((line, idx) => (
        <Line 
          key={idx} 
          points={line} 
          color="#3182ce" 
          opacity={0.15} 
          transparent 
          lineWidth={1} 
        />
      ))}
      
      {/* Base nodes */}
      <Points positions={positions}>
        <PointMaterial transparent color="#38a169" size={0.08} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
      </Points>

      {/* Main Research Nodes and Labels */}
      {labels.map((lbl, idx) => (
        <group key={`label-${idx}`} position={lbl.pos}>
            <mesh>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshBasicMaterial color={lbl.color.includes('green') ? '#38a169' : '#3182ce'} />
            </mesh>
            {/* Draw a thick line from center to the label node */}
            <Line points={[[0,0,0], [-(lbl.pos[0]*0.8), -(lbl.pos[1]*0.8), -(lbl.pos[2]*0.8)]]} color={lbl.color.includes('green') ? '#38a169' : '#3182ce'} lineWidth={2} opacity={0.4} transparent/>
            <Html distanceFactor={15} center>
                <div className={`px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100 whitespace-nowrap font-bold ${lbl.color} text-sm pointer-events-none transform transition-transform duration-300 hover:scale-110`}>
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
    <div className="w-full h-[400px] lg:h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3182ce" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38a169" />
        <BrainNodes />
        <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default InteractiveBrain;
