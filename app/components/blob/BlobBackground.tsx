"use client"
import { useRef, Suspense, FC } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Mesh, ShaderMaterialParameters, IUniform } from 'three';

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;
uniform float time;

void main() {
  vUv = uv;
  vec3 pos = position;
  
  // More complex displacement with multiple frequencies
  float displacement = 
    sin(pos.x * 3.0 + time * 1.2) * 0.15 +
    sin(pos.y * 4.0 + time * 1.7) * 0.15 +
    sin(pos.z * 2.5 + time * 2.3) * 0.15 +
    sin(pos.x * 5.0 + pos.y * 3.0 + time * 0.5) * 0.1;
  
  // Add radial distortion
  float radial = length(pos.xy) * 0.5;
  displacement += sin(radial * 8.0 + time * 1.5) * 0.1;
  
  // Apply displacement with varying intensity per axis
  pos += normal * displacement * vec3(0.4, 0.35, 0.45);
  vPosition = pos;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;
uniform float time;
uniform vec3 color1;
uniform vec3 color2;

void main() {
  float depth = vPosition.z * 0.5 + 0.5;
  float noise = sin(vUv.x * 20.0 + time) * cos(vUv.y * 15.0 + time);
  vec3 color = mix(color1, color2, smoothstep(-0.5, 0.5, noise));
  float alpha = smoothstep(0.4, 0.6, depth) * 0.4;
  gl_FragColor = vec4(color, alpha);
}
`;

interface BlobUniforms {
  time: IUniform<number>;
  color1: IUniform<THREE.Color>;
  color2: IUniform<THREE.Color>;
  [key: string]: IUniform<any>; // Add index signature
}

const Blob: FC = () => {
  const meshRef = useRef<Mesh>(null);
  const uniforms = useRef<BlobUniforms>({
    time: { value: 0 },
    color1: { value: new THREE.Color(0x8a2be2) },
    color2: { value: new THREE.Color(0xff1493) },
  });

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      uniforms.current.time.value = clock.getElapsedTime() * 0.5;
    }
  });

  const materialProps = {
    vertexShader,
    fragmentShader,
    uniforms: uniforms.current as { [uniform: string]: IUniform<any> },
    transparent: true,
    blending: THREE.AdditiveBlending,
    extensions: {
      clipCullDistance: false,
      multiDraw: false
    } as {
      clipCullDistance: boolean;
      multiDraw: boolean;
    }
  };


  return (
    <mesh ref={meshRef} scale={2.8}>
      <icosahedronGeometry args={[1, 128]} />
      <shaderMaterial {...materialProps} />
    </mesh>
  );
};

const BlobBackground: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Blob />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BlobBackground;