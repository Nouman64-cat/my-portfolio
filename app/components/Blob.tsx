import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Blob: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create Scene
    const scene = new THREE.Scene();

    // Create Camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current!.clientWidth / mountRef.current!.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Handle Window Resize
    const handleResize = () => {
      const width = mountRef.current!.clientWidth;
      const height = mountRef.current!.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Create Blob Geometry (Sphere)
    const geometry = new THREE.SphereGeometry(1, 32, 32); // Create a simple sphere geometry
    const material = new THREE.MeshStandardMaterial({
      color: 0xff0075, // Bright pink color for visibility
      metalness: 0.5,  // Adds a metallic effect
      roughness: 0.1,  // Smooth surface
    });
    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);

    // Add Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Animation
    const animateBlob = () => {
      requestAnimationFrame(animateBlob);

      // Blob pulsating effect
      blob.scale.x = 1 + 0.2 * Math.sin(Date.now() * 0.001);
      blob.scale.y = 1 + 0.2 * Math.cos(Date.now() * 0.001);

      // Render scene
      renderer.render(scene, camera);
    };

    // Start animation
    animateBlob();

    // Clean up on unmount
    return () => {
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Blob;
