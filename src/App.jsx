import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function Desk() {
  return (
    <mesh position={[0, 0, 0]} receiveShadow>
      <boxGeometry args={[6, 0.4, 3]} />
      <meshStandardMaterial color="#8b5a2b" />
    </mesh>
  );
}

function Laptop({ color }) {
  return (
    <group position={[0, 0.5, 0]}>
      <mesh castShadow>
        <boxGeometry args={[2.5, 0.2, 1.6]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh
        position={[0, 1, -0.7]}
        rotation={[0.15, 0, 0]}
        castShadow
      >
        <boxGeometry args={[2.3, 1.4, 0.15]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      <mesh
        position={[0, 1, -0.79]}
        rotation={[0.15, 0, 0]}
      >
        <planeGeometry args={[2, 1.1]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>
    </group>
  );
}

function Book() {
  return (
    <group>
      <mesh position={[-2, 0.5, 0.5]}>
        <boxGeometry args={[1.5, 0.3, 1]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>

      <mesh position={[-2, 0.8, 0.5]}>
        <boxGeometry args={[1.5, 0.3, 1]} />
        <meshStandardMaterial color="#16a34a" />
      </mesh>
    </group>
  );
}

function Mug() {
  return (
    <mesh position={[2, 0.7, 0]}>
      <cylinderGeometry args={[0.45, 0.45, 0.8, 16]} />
      <meshStandardMaterial color="#f59e0b" />
    </mesh>
  );
}

function App() {
  const [laptopColor, setLaptopColor] = useState("#2563eb");
  const [autoRotate, setAutoRotate] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <div className="app">
      <div className="page">

        {/* Page heading */}
        <div className="header">
          <h1>3D Study Desk</h1>

          <p>
            Explore, customize, and interact with your virtual study space.
          </p>
        </div>

        {/* Controls */}
        <div className="controls">

          <button onClick={() => setLaptopColor("#2563eb")}>
            Blue
          </button>

          <button onClick={() => setLaptopColor("#dc2626")}>
            Red
          </button>

          <button onClick={() => setLaptopColor("#16a34a")}>
            Green
          </button>

          <button onClick={() => setAutoRotate(!autoRotate)}>
            {autoRotate ? "Stop Rotation" : "Start Rotation"}
          </button>

        </div>

        {/* 3D Scene */}
        <div className="scene">

          {reducedMotion ? (
            <div className="fallback">
              <h2>3D Study Desk</h2>
              <p>
                3D animation is reduced because your device prefers reduced motion.
              </p>
            </div>
          ) : (
            <Suspense
              fallback={
                <div className="fallback">
                  Loading 3D scene...
                </div>
              }
            >
              <Canvas
                camera={{ position: [6, 5, 7] }}
                shadows
                dpr={[1, 1.5]}

              >
                {/* Lighting */}
                <ambientLight intensity={1.2} />

                <directionalLight
                  position={[5, 8, 5]}
                  intensity={2}
                  castShadow
                />

                {/* Objects */}
                <Desk />

                <Laptop color={laptopColor} />

                <Book />

                <Mug />

                {/* Camera controls */}
                <OrbitControls
                  autoRotate={autoRotate}
                  autoRotateSpeed={1.5}
                />
              </Canvas>
            </Suspense>
          )}

        </div>

      </div>
    </div>
  );
}
export default App;
