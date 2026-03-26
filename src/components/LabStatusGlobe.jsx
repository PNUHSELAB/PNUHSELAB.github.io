import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Stars, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const LAB_LOCATION = {
  name: 'PNU HSE Lab',
  campus: 'Pusan National University, Busan',
  lat: 36.2323,
  lon: 146.4,
};

const PIN_MODEL_OFFSET = [0, -0.25, 0.38];
const PIN_RING_OFFSET = [0, 0.01, 0];
const PIN_LABEL_OFFSET = [0.78, 0.1, 0];

const STATUS_START = { hour: 8, minute: 30 };
const STATUS_END = { hour: 18, minute: 0 };

const getKoreaTime = () => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const parts = Object.fromEntries(
    formatter.formatToParts(now).map(({ type, value }) => [type, value])
  );

  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    hour: Number(parts.hour),
    minute: Number(parts.minute),
    second: Number(parts.second),
    label: `${parts.year}.${parts.month}.${parts.day} ${parts.hour}:${parts.minute}:${parts.second} KST`,
  };
};

const getLabStatus = ({ hour, minute }) => {
  const currentMinutes = hour * 60 + minute;
  const startMinutes = STATUS_START.hour * 60 + STATUS_START.minute;
  const endMinutes = STATUS_END.hour * 60 + STATUS_END.minute;

  return currentMinutes >= startMinutes && currentMinutes < endMinutes;
};

const getNextStatusChangeLabel = ({ hour, minute }) => {
  const currentMinutes = hour * 60 + minute;
  const startMinutes = STATUS_START.hour * 60 + STATUS_START.minute;
  const endMinutes = STATUS_END.hour * 60 + STATUS_END.minute;

  if (currentMinutes < startMinutes) {
    return 'Next change at 08:30 KST';
  }

  if (currentMinutes < endMinutes) {
    return 'Next change at 18:00 KST';
  }

  return 'Next change at 08:30 KST tomorrow';
};

const latLonToVector3 = (lat, lon, radius) => {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

const EarthModel = ({ targetRadius = 2.15 }) => {
  const { scene } = useGLTF('/earth.glb');
  const model = useMemo(() => scene.clone(true), [scene]);

  const { scale, centerY } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const longestSide = Math.max(size.x, size.y, size.z) || 1;
    return {
      scale: (targetRadius * 2) / longestSide,
      centerY: center.y,
    };
  }, [model, targetRadius]);

  useEffect(() => {
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material.needsUpdate = true;
        }
      }
    });
  }, [model]);

  return (
    <primitive
      object={model}
      scale={scale}
      position={[0, -centerY * scale, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
};

const PinModel = ({ isLabOpen, targetHeight = 0.36 }) => {
  const { scene } = useGLTF('/push_pin.glb');
  const model = useMemo(() => scene.clone(true), [scene]);

  const { scale, offsetX, offsetY, offsetZ } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const height = size.y || 1;

    return {
      scale: targetHeight / height,
      offsetX: -center.x,
      offsetY: -box.min.y,
      offsetZ: -center.z,
    };
  }, [model, targetHeight]);

  useEffect(() => {
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material?.color) {
          child.material = child.material.clone();
          child.material.emissive = new THREE.Color(isLabOpen ? '#4ade80' : '#fb923c');
          child.material.emissiveIntensity = 0.16;
        }
      }
    });
  }, [isLabOpen, model]);

  return (
    <primitive
      object={model}
      scale={scale}
      position={[offsetX * scale, offsetY * scale, offsetZ * scale]}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
};

const GlobeScene = ({ isLabOpen }) => {
  const globeRadius = 2.15;
  const markerPosition = useMemo(
    () => latLonToVector3(LAB_LOCATION.lat, LAB_LOCATION.lon, globeRadius - 0.0),
    [globeRadius]
  );
  const markerNormal = useMemo(() => markerPosition.clone().normalize(), [markerPosition]);
  const globeRef = useRef(null);
  const markerRef = useRef(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.12 - 4.58;
      globeRef.current.rotation.x = THREE.MathUtils.lerp(globeRef.current.rotation.x, 0.28, 0.03);
    }
  });

  return (
    <>
      <Stars radius={80} depth={30} count={2500} factor={3} saturation={0} fade speed={0.8} />
      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 3, 6]} intensity={2.5} color="#ffffff" />
      <pointLight position={[-6, -3, 2]} intensity={3.2} color="#6cff7f" />
      <pointLight position={[6, 2, -2]} intensity={2.4} color="#7dd3fc" />

      <group ref={globeRef}>
        <Suspense
          fallback={
            <Html center>
              <div className="rounded-full border border-white/12 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
                Loading Globe...
              </div>
            </Html>
          }
        >
          <EarthModel targetRadius={globeRadius} />
        </Suspense>

        <group
          position={markerPosition}
          quaternion={new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            markerNormal
          )}
        >
          <group ref={markerRef} position={PIN_MODEL_OFFSET}>
            <Suspense fallback={null}>
              <PinModel isLabOpen={isLabOpen} />
            </Suspense>
          </group>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={PIN_RING_OFFSET} scale={1.45}>
            <ringGeometry args={[0.1, 0.15, 40]} />
            <meshBasicMaterial color={isLabOpen ? '#86efac' : '#fdba74'} transparent opacity={0.62} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={PIN_RING_OFFSET} scale={1.95}>
            <ringGeometry args={[0.1, 0.13, 40]} />
            <meshBasicMaterial color={isLabOpen ? '#86efac' : '#fdba74'} transparent opacity={0.22} side={THREE.DoubleSide} />
          </mesh>
          <Html
            position={PIN_LABEL_OFFSET}
            zIndexRange={[120, 0]}
          >
            <div className="min-w-[112px] rounded-xl border border-white/12 bg-slate-950/84 px-2.5 py-2 text-white shadow-[0_14px_28px_rgba(2,6,23,0.38)] backdrop-blur-xl [transform:translate3d(0,0,0)]">
              <p className="text-[6px] font-semibold uppercase tracking-[0.14em] text-white/55">
                Busan, Korea
              </p>
              <p className="mt-1 text-[9px] font-semibold leading-tight text-white">{LAB_LOCATION.name}</p>
              <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-2 py-0.5 text-[7px] font-semibold">
                <span className={`h-1.5 w-1.5 rounded-full ${isLabOpen ? 'bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.75)]' : 'bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.7)]'}`} />
                {isLabOpen ? 'Lab On' : 'Lab Off'}
              </div>
            </div>
          </Html>
        </group>
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom
        zoomSpeed={1.05}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI / 3.8}
        maxPolarAngle={Math.PI / 1.22}
        minDistance={4.6}
        maxDistance={13.2}
        autoRotate={false}
      />
    </>
  );
};

useGLTF.preload('/earth.glb');
useGLTF.preload('/push_pin.glb');

const LabStatusGlobe = () => {
  const [koreaTime, setKoreaTime] = useState(() => getKoreaTime());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setKoreaTime(getKoreaTime());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const isLabOpen = useMemo(() => getLabStatus(koreaTime), [koreaTime]);
  const nextStatusChange = useMemo(() => getNextStatusChangeLabel(koreaTime), [koreaTime]);

  return (
    <section
      id="lab-status"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(108,255,127,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_30%),linear-gradient(180deg,#03111f_0%,#071524_45%,#0b1220_100%)] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_22%,transparent_75%,rgba(255,255,255,0.02))]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/90">
            Live Lab Status
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Laboratory On, Off
            <br />
            by Korea Time
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            The status changes automatically based on Korea Standard Time. The lab is marked as on from 08:30 to
            18:00 and off outside those hours.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Current Korea Time</p>
              <p className="mt-3 text-lg font-semibold text-white">{koreaTime.label}</p>
              <p className="mt-2 text-sm text-slate-400">{LAB_LOCATION.campus}</p>
            </div>
            <div className={`rounded-[28px] border p-5 backdrop-blur-xl ${isLabOpen ? 'border-emerald-400/35 bg-emerald-400/10' : 'border-orange-400/30 bg-orange-400/10'}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">Today&apos;s Status</p>
              <div className="mt-3 flex items-center gap-3">
                <span className={`inline-flex h-3.5 w-3.5 rounded-full ${isLabOpen ? 'bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]' : 'bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.7)]'}`} />
                <p className="text-2xl font-bold text-white">{isLabOpen ? 'Laboratory On' : 'Laboratory Off'}</p>
              </div>
              <p className="mt-3 text-sm text-slate-300">{nextStatusChange}</p>
            </div>
          </div>
        </div>

        <div className="relative h-[440px] overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.14),transparent_45%),rgba(2,6,23,0.45)] shadow-[0_32px_80px_rgba(2,6,23,0.45)]">
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-xl">
            Earth View
          </div>
          <Canvas camera={{ position: [0, 0.1, 8.4], fov: 30 }} dpr={[1, 1.8]}>
            <GlobeScene isLabOpen={isLabOpen} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default LabStatusGlobe;
