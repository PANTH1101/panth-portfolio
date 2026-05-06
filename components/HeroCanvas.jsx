"use client";

import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CodeShard({ position, rotation, color, labelWidth = 0.72 }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[labelWidth, 0.22, 0.035]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.22}
          metalness={0.4}
          roughness={0.28}
        />
      </mesh>
      <mesh position={[-labelWidth / 2 + 0.08, 0, 0.025]}>
        <boxGeometry args={[0.05, 0.05, 0.02]} />
        <meshStandardMaterial color="#f8fafc" emissive="#f8fafc" emissiveIntensity={0.25} />
      </mesh>
    </group>
  );
}

function DeveloperCore() {
  const group = useRef();
  const torus = useRef();
  const shards = useMemo(
    () => [
      [[-1.9, 0.9, 0.2], [0.15, 0.5, -0.2], "#5eead4", 0.82],
      [[1.75, 0.65, -0.15], [-0.1, -0.45, 0.18], "#fda4af", 0.74],
      [[-1.4, -1.05, -0.1], [0.35, -0.28, 0.22], "#bef264", 0.68],
      [[1.35, -1.05, 0.25], [-0.4, 0.36, -0.18], "#93c5fd", 0.78],
    ],
    [],
  );

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.28;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
    }
    if (torus.current) {
      torus.current.rotation.x += delta * 0.45;
      torus.current.rotation.z -= delta * 0.32;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.8} rotationIntensity={0.45} floatIntensity={0.6}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.08, 3]} />
          <meshStandardMaterial
            color="#14b8a6"
            emissive="#0f766e"
            emissiveIntensity={0.52}
            metalness={0.42}
            roughness={0.34}
          />
        </mesh>
        <mesh scale={1.018}>
          <icosahedronGeometry args={[1.08, 2]} />
          <meshBasicMaterial color="#ccfbf1" transparent opacity={0.28} wireframe />
        </mesh>
        <mesh ref={torus}>
          <torusGeometry args={[1.72, 0.018, 12, 160]} />
          <meshStandardMaterial color="#fda4af" emissive="#fb7185" emissiveIntensity={0.95} />
        </mesh>
        <mesh rotation={[Math.PI / 2.7, 0.35, 0.35]}>
          <torusGeometry args={[1.96, 0.012, 12, 180]} />
          <meshStandardMaterial color="#bef264" emissive="#a3e635" emissiveIntensity={0.7} />
        </mesh>
        {shards.map(([position, rotation, color, labelWidth], index) => (
          <CodeShard
            key={index}
            position={position}
            rotation={rotation}
            color={color}
            labelWidth={labelWidth}
          />
        ))}
      </Float>
    </group>
  );
}

function SceneRig() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 4]} intensity={3} castShadow />
      <pointLight position={[-3, 2, 3]} color="#5eead4" intensity={5} />
      <pointLight position={[3, -2, 2]} color="#fb7185" intensity={4} />
      <Sparkles count={80} scale={5.6} size={2.2} speed={0.35} color="#ccfbf1" />
      <DeveloperCore />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div
      data-hero-canvas
      className="relative h-[360px] w-full sm:h-[480px] lg:h-[720px]"
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_48%,var(--background)_88%)] opacity-25" />
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
        onCreated={({ gl }) => gl.setClearColor("#000000", 0)}
        shadows
      >
        <SceneRig />
      </Canvas>
    </div>
  );
}
