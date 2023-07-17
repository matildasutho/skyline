export function SpCode() {
  return `
noLighting()

let rayDir = getRayDirection()
let rayPos = getSpace()
let col = vec3(0)
let f = input(1.7, 0, 20)
let amp = input(3, 0, 20)
let pz = input(4, 0, 20)

function density(p) {
  let n = pow(abs(sin(amp*(noise(f*p)+1.0)+0.2*time)),pz)
  return n*0.05*smoothstep(0.9, 0.5, length(p))
}

for (let i=0; i<30; i++) {
  col += density(rayPos)
  rayPos += rayDir*0.06
}
color(1-sqrt(col));
box(1.0,1.0,1.0)
  `;
}

//     let audio = input();
// let pointerDown = input();

// setMaxIterations(5);
// let s = getSpace();
// let r = getRayDirection();

// let n1 = noise(r * 4 + vec3(0, audio, vec3(0, audio, audio)) * 0.5);
// let n = noise(s + vec3(0, 0, audio + time * 0.1) + n1);
//     metal(n*.5+.5);
//     shine(n*.5+.5);

//     color(normal * .1 + vec3(0, 0, 1));
//     displace(mouse.x * 2, mouse.y * 2, 0);
//     boxFrame(vec3(2), abs(n) * .1 + .04 );
//     mixGeo(pointerDown);
//     sphere(n * .5 + .8);
