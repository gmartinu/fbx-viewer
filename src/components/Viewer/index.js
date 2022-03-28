import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { default as PropTypes } from "prop-types";
import Loader from "../Loader";
import { Html, useProgress } from '@react-three/drei'

function Loading() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function Viewer({ path }) {
  return (
    <Canvas>
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} intensity={10} />
        <directionalLight color="white" position={[0, 180, 0]} intensity={10} />
        <Loader path={path} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

Viewer.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Viewer;
