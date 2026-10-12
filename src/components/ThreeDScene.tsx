import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { threeDConfig } from '../data/portfolioData';

// Component to load an external GLB/GLTF model if configured
function ExternalModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.4 * threeDConfig.rotationSpeed;
      if (threeDConfig.enableMouseInteraction) {
        modelRef.current.rotation.x = THREE.MathUtils.lerp(
          modelRef.current.rotation.x,
          pointer.y * 0.25,
          0.05
        );
        modelRef.current.rotation.z = THREE.MathUtils.lerp(
          modelRef.current.rotation.z,
          -pointer.x * 0.25,
          0.05
        );
      }
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2}
      position={[0, 0, 0]}
    />
  );
}

// Procedural AI Quantum Core & Gyroscope Orbitals
function ProceduralAICore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const wireCoreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_state, delta) => {
    // Subtle mouse tilt with dampening
    if (groupRef.current && threeDConfig.enableMouseInteraction) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.4,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.35,
        0.05
      );
    }

    // Inner Core rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.5 * threeDConfig.rotationSpeed;
      coreRef.current.rotation.x += delta * 0.25 * threeDConfig.rotationSpeed;
    }
    if (wireCoreRef.current) {
      wireCoreRef.current.rotation.y -= delta * 0.3 * threeDConfig.rotationSpeed;
      wireCoreRef.current.rotation.z += delta * 0.4 * threeDConfig.rotationSpeed;
    }

    // Orbital Rings counter-rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.45 * threeDConfig.rotationSpeed;
      ring1Ref.current.rotation.x += delta * 0.2 * threeDConfig.rotationSpeed;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.55 * threeDConfig.rotationSpeed;
      ring2Ref.current.rotation.z -= delta * 0.3 * threeDConfig.rotationSpeed;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.35 * threeDConfig.rotationSpeed;
      ring3Ref.current.rotation.y -= delta * 0.4 * threeDConfig.rotationSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.6}>
        {/* Inner Solid Quantum Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshPhysicalMaterial
            color="#0b1329"
            emissive="#1d4ed8"
            emissiveIntensity={0.3}
            roughness={0.15}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
            reflectivity={0.9}
          />
        </mesh>

        {/* Wireframe Holographic Core Cage */}
        <mesh ref={wireCoreRef}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#00d2ff"
            emissiveIntensity={0.8}
            wireframe
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* Energy Core Point Light */}
        <pointLight position={[0, 0, 0]} color="#00d2ff" intensity={3.5} distance={6} />

        {/* Orbital Ring 1 - Cyan primary orbit */}
        <group ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
          <mesh>
            <torusGeometry args={[2.0, 0.022, 16, 100]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#00d2ff"
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {/* Satellite Node 1 */}
          <mesh position={[2.0, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#00d2ff" emissive="#ffffff" emissiveIntensity={1} />
          </mesh>
        </group>

        {/* Orbital Ring 2 - Violet secondary orbit */}
        <group ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
          <mesh>
            <torusGeometry args={[2.4, 0.02, 16, 100]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#8b5cf6"
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {/* Satellite Node 2 */}
          <mesh position={[0, 2.4, 0]}>
            <sphereGeometry args={[0.075, 16, 16]} />
            <meshStandardMaterial color="#c084fc" emissive="#ffffff" emissiveIntensity={1} />
          </mesh>
        </group>

        {/* Orbital Ring 3 - Outer Thin Ring */}
        <group ref={ring3Ref} rotation={[Math.PI / 6, -Math.PI / 3, Math.PI / 4]}>
          <mesh>
            <torusGeometry args={[2.8, 0.015, 16, 100]} />
            <meshStandardMaterial
              color="#60a5fa"
              emissive="#3b82f6"
              emissiveIntensity={0.4}
              metalness={0.9}
              roughness={0.3}
            />
          </mesh>
          {/* Satellite Node 3 */}
          <mesh position={[-2.8, 0, 0]}>
            <sphereGeometry args={[0.065, 16, 16]} />
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.8} />
          </mesh>
        </group>

        {/* Ambient floating quantum dust sparkles */}
        <Sparkles
          count={45}
          scale={5.5}
          size={2.2}
          speed={0.4}
          color="#38bdf8"
          opacity={0.7}
        />
        <Sparkles
          count={30}
          scale={5.0}
          size={1.8}
          speed={0.3}
          color="#a855f7"
          opacity={0.6}
        />
      </Float>
    </group>
  );
}

// Sleek fallback when WebGL is unavailable or loading fails
function WebGLFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Animated concentric rings */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_12s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-violet-500/30 border-dashed animate-[spin_18s_linear_infinite_reverse]" />
        <div className="absolute inset-10 rounded-full border border-sky-400/20 animate-pulse" />
        {/* Glowing holographic sphere */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-600/30 via-violet-600/30 to-blue-500/20 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_50px_rgba(56,189,248,0.3)] flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-cyan-400/20 border border-white/40 animate-ping opacity-30" />
        </div>
        <div className="absolute bottom-2 text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400/80 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20">
            Interactive AI Node
          </span>
        </div>
      </div>
    </div>
  );
}

// Error Boundary for WebGL & GLTF loading
class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn("3D Scene caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <WebGLFallback />;
    }
    return this.props.children;
  }
}

export const ThreeDScene: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (hasWebGL === false) {
    return <WebGLFallback />;
  }

  return (
    <div className="w-full h-full relative select-none">
      <ThreeErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 45 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full"
        >
          {/* Subtle Ambient Lighting */}
          <ambientLight intensity={0.4} />

          {/* Key Light: Electric Cyan */}
          <directionalLight position={[4, 5, 4]} intensity={2.2} color="#e0f2fe" />

          {/* Accent Rim Light: Neon Violet */}
          <pointLight position={[-4, -3, 2]} intensity={3.0} color="#a855f7" />

          {/* Top Soft Blue Light */}
          <pointLight position={[0, 4, -2]} intensity={2.0} color="#38bdf8" />

          <Suspense fallback={null}>
            {threeDConfig.customModelUrl && threeDConfig.customModelUrl.trim() !== '' ? (
              <ExternalModel url={threeDConfig.customModelUrl} />
            ) : (
              <ProceduralAICore />
            )}
          </Suspense>
        </Canvas>
      </ThreeErrorBoundary>

      {/* Floating Interactive Badge */}
      <div className="absolute bottom-3 right-4 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-400">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>Three.js Interactive Core • R3F</span>
      </div>
    </div>
  );
};

export default ThreeDScene;
