import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Append to DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 2. 3D Contents
    // Cube
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const cubeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4f46e5, // HSE blue/indigo
      roughness: 0.2, 
      metalness: 0.8,
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.5
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Particles / Trail
    const maxParticles = 300; // Increased for better trail effect
    const trailPositions = new Float32Array(maxParticles * 3);
    const trailGeometry = new THREE.BufferGeometry();
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    
    // Create a circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 16, 16);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const trailMaterial = new THREE.PointsMaterial({ 
      color: 0x60a5fa, 
      size: 0.2,
      map: particleTexture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const trail = new THREE.Points(trailGeometry, trailMaterial);
    scene.add(trail);

    const positionsArray = [];

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x60a5fa, 50, 100);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xa78bfa, 50, 100);
    pointLight2.position.set(-2, -3, -4);
    scene.add(pointLight2);

    // 4. Mouse Coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      mouseX = (clientX / window.innerWidth) * 2 - 1;
      mouseY = -(clientY / window.innerHeight) * 2 + 1;
      
      targetX = mouseX * 6;
      targetY = mouseY * 4;
    };

    const isMobile = window.innerWidth < 768;
    const sensitivity = isMobile ? 0.15 : 0.3;

    window.addEventListener('pointermove', onMouseMove);
    window.addEventListener('touchmove', onMouseMove);

    // 5. Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Camera rotation
      camera.rotation.y += (mouseX * sensitivity - camera.rotation.y) * 0.05;
      camera.rotation.x += (-mouseY * sensitivity - camera.rotation.x) * 0.05;

      // Object tracking (lerp)
      cube.position.x += (targetX - cube.position.x) * 0.1;
      cube.position.y += (targetY - cube.position.y) * 0.1;
      
      // Cube rotation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.012;

      // Trail updating
      const currentPos = cube.position.clone();
      
      // Optional: Add some slight random offset to trail per frame for a better effect
      currentPos.x += (Math.random() - 0.5) * 0.1;
      currentPos.y += (Math.random() - 0.5) * 0.1;
      currentPos.z += (Math.random() - 0.5) * 0.1;

      positionsArray.push(currentPos);
      if (positionsArray.length > maxParticles) {
        positionsArray.shift();
      }

      // Update buffer
      const positions = trailGeometry.attributes.position.array;
      for (let i = 0; i < maxParticles; i++) {
        const p = positionsArray[i];
        if (p) {
          positions[i * 3] = p.x;
          positions[i * 3 + 1] = p.y;
          positions[i * 3 + 2] = p.z;
        } else {
          positions[i * 3] = 9999;
          positions[i * 3 + 1] = 9999;
          positions[i * 3 + 2] = 9999;
        }
      }
      trailGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('pointermove', onMouseMove);
      window.removeEventListener('touchmove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      trailGeometry.dispose();
      trailMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60" />;
};

export default ThreeBackground;
