import THREE from 'three';
const ThreeBSP = require('../../index.js')(THREE);

export const meshFactory = () => {
  const box = new THREE.Mesh(new THREE.BoxGeometry(500, 100, 100));
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(100, 50, 50));

  const sBSP = new ThreeBSP(sphere);
  const bBSP = new ThreeBSP(box);

  const sub = bBSP.subtract(sBSP);
  const newMesh = sub.toMesh();

  newMesh.material = new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x1a1a1a, shininess: 30, shading: THREE.FlatShading });

  return Object.assign({}, { csg: newMesh });
};
