import * as THREE from 'three';
import { useEffect, useRef, useMemo } from 'react';

export default function CustomObject() {
  const verticesCount = 10 * 3;
  const geometryRef = useRef();

  useEffect(() => {
    // Check if geometryRef is defined before calling computeVertexNormals
    if (geometryRef.current) {
      geometryRef.current.computeVertexNormals();
    }
  }, []);

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, [verticesCount]);

  return (
    <>
      <mesh>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>

        <meshStandardMaterial color="red" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
