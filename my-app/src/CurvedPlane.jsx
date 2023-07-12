import * as THREE from "three";
import { useMemo } from "react";

function CurvedPlane({ width, height, radius, children, ...props }) {
  const { geometry, heightMin, heightMax } = useMemo(
    () => curvedPlaneGeometry(width, height, radius),
    [width, height, radius]
  );

  return (
    <group {...props}>
      <mesh
        geometry={geometry}
        receiveShadow
        castShadow
        position-z={-heightMax}
      >
        {children}
      </mesh>
    </group>
  );
}

function curvedPlaneGeometry(width = 2, height = 2, radius = 1) {
  const segments = 100;
  const geometry = new THREE.PlaneGeometry(
    radius * 2,
    radius * 2,
    segments,
    segments
  );

  let heightMin = -radius;
  let heightMax = radius;

  const position = geometry.attributes.position;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);

    const theta = Math.atan2(y, x);
    const phi = Math.PI - Math.acos(Math.sqrt(x * x + y * y) / radius);

    const vertex = new THREE.Vector3();
    vertex.setFromSphericalCoords(radius, phi, theta);

    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }

  // geometry.computeVertexNormals()
  // position.needsUpdate = true

  return { geometry, heightMin, heightMax };
}

export default CurvedPlane;
