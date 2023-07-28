uniform float uTime;
uniform float u_data;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying float vDisplacement;


void main() {


  gl_FragColor = vec4(vec3(vDisplacement, vDisplacement, u_data), 1);
  }

  // get frequencies. colours / shapes / collection of images - 