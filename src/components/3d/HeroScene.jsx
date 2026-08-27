import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/useTheme';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { CanvasFallback } from './CanvasFallback';

export const HeroScene = () => {
  const mountRef = useRef(null);
  const { theme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [webGlSupported] = useState(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (prefersReducedMotion || !webGlSupported) return;

    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;
    camera.position.y = 0.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, theme === 'dark' ? 1.2 : 1.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, theme === 'dark' ? 3.5 : 2.5, 20);
    pointLight1.position.set(4, 5, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, theme === 'dark' ? 3.0 : 2.0, 20);
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    // Group for all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core: Frosted / Glowing WebCubixs Hexahedron/Cube
    const coreGeometry = new THREE.BoxGeometry(2.0, 2.0, 2.0);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x0f172a : 0xf1f5f9,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: false,
      transparent: true,
      opacity: 0.88
    });
    const coreCube = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreCube);

    // 2. Outer Wireframe Cage
    const wireframeGeo = new THREE.BoxGeometry(2.35, 2.35, 2.35);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: theme === 'dark' ? 0x06b6d4 : 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.6 : 0.4
    });
    const wireframeCube = new THREE.Mesh(wireframeGeo, wireframeMat);
    mainGroup.add(wireframeCube);

    // 3. Orbiting Satellite Cubes / Tech Nodes
    const satelliteGroup = new THREE.Group();
    const satelliteNodes = [];
    const nodeGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const nodeMat1 = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.3, metalness: 0.7 });
    const nodeMat2 = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.3, metalness: 0.7 });
    const nodeMat3 = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3, metalness: 0.7 });

    const nodePositions = [
      { pos: [-2.2, 1.2, 0.8], mat: nodeMat1, speed: 0.02 },
      { pos: [2.0, -1.4, 1.2], mat: nodeMat2, speed: -0.015 },
      { pos: [1.6, 2.0, -1.0], mat: nodeMat3, speed: 0.025 },
      { pos: [-1.8, -1.8, -0.6], mat: nodeMat1, speed: -0.018 },
      { pos: [0.0, 2.4, 1.5], mat: nodeMat2, speed: 0.012 }
    ];

    nodePositions.forEach((item) => {
      const node = new THREE.Mesh(nodeGeo, item.mat);
      node.position.set(...item.pos);
      satelliteGroup.add(node);
      satelliteNodes.push({ mesh: node, initialPos: [...item.pos], speed: item.speed });
    });
    mainGroup.add(satelliteGroup);

    // 4. Background Constellation / Particle Field
    const particlesCount = 80;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: theme === 'dark' ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: theme === 'dark' ? 0.6 : 0.4
    });
    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    // Mouse Tracking with Lerp
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 1.5;
      targetRotationX = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Rotation
    let scrollRotation = 0;
    const handleScroll = () => {
      scrollRotation = window.scrollY * 0.002;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Damped mouse rotation
      mainGroup.rotation.y += (targetRotationY + scrollRotation - mainGroup.rotation.y) * 0.05 + 0.003;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Internal subtle rotation
      wireframeCube.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;
      wireframeCube.rotation.y = elapsedTime * 0.3;

      coreCube.rotation.y = -elapsedTime * 0.2;

      // Orbiting satellites animation
      satelliteNodes.forEach((item, idx) => {
        const angle = elapsedTime * item.speed * 10 + idx;
        const radius = 2.4;
        item.mesh.position.x = Math.cos(angle) * radius;
        item.mesh.position.z = Math.sin(angle) * radius;
        item.mesh.position.y = item.initialPos[1] + Math.sin(elapsedTime * 2 + idx) * 0.2;
        item.mesh.rotation.x += 0.02;
        item.mesh.rotation.y += 0.03;
      });

      particlePoints.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
      renderer.dispose();
    };
  }, [theme, prefersReducedMotion, webGlSupported]);

  if (prefersReducedMotion || !webGlSupported) {
    return <CanvasFallback />;
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Status Badges around 3D canvas */}
      <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md text-xs shadow-lg pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="font-mono-code text-neutral-700 dark:text-neutral-300 font-medium">Three.js Procedural 3D</span>
      </div>

      <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md text-xs shadow-lg pointer-events-none">
        <span className="font-mono-code text-neutral-500">Interactive Canvas</span>
      </div>
    </div>
  );
};
