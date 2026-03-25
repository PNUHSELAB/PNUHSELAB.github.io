import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_URL = '/low_poly_hero_man.glb';

const CharacterModel = () => {
  const { scene } = useGLTF(MODEL_URL);
  const groupRef = useRef();

  const preparedScene = useMemo(() => {
    const clonedScene = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    const scale = 1.55 / maxAxis;

    clonedScene.position.sub(center);
    clonedScene.position.y -= size.y * 0.02;
    clonedScene.scale.setScalar(scale);
    clonedScene.rotation.y = Math.PI * 0.1;

    clonedScene.traverse((child) => {
      if (child.isMesh || child.isSkinnedMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material.transparent = true;
          child.material.opacity = 0.82;
          child.material.needsUpdate = true;
        }
      }
    });

    return clonedScene;
  }, [scene]);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = Math.PI * 0.08 + state.clock.elapsedTime * 0.2;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.15) * 0.16;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.75) * 0.025;
  });

  return (
    <group ref={groupRef} position={[0, 0.75, 0]}>
      <primitive object={preparedScene} />
    </group>
  );
};

const HeroCharacter = () => {
  return (
    <div className="h-full w-full cursor-grab active:cursor-grabbing rounded-[28px] border border-white/12 bg-white/6 backdrop-blur-md shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
      <Canvas
        camera={{ position: [0, 1.7, 8.2], fov: 36 }}
        shadows
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.9} />
        <hemisphereLight intensity={1.25} groundColor="#0f172a" color="#ffffff" />
        <directionalLight position={[4, 8, 6]} intensity={3} color="#ffffff" castShadow />
        <directionalLight position={[-5, 4, 5]} intensity={1.8} color="#bfdbfe" />
        <pointLight position={[0, 2, 5]} intensity={1.8} color="#dcfce7" />

        <Suspense fallback={null}>
          <CharacterModel />
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 1.7}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
          enableDamping
          dampingFactor={0.08}
        />

        <ContactShadows position={[0, -1.95, 0]} opacity={0.2} scale={7.2} blur={2.8} far={3.6} color="#020617" />
      </Canvas>
    </div>
  );
};

useGLTF.preload(MODEL_URL);

export default HeroCharacter;
