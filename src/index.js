// three.js
import * as _THREE from 'three';

// Addons
import loadAddOns from './utils';

// OBJ Loader
import { loadMeshWithMaterials } from '../examples/OBJLoaderExample';
const THREE = loadAddOns(_THREE);

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 10;
const scene = new THREE.Scene();
const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)');
scene.add(ambientLight);

loadMeshWithMaterials('sphenodon.obj', 'sphenodon.mtl', 'sphenodon/').then((mesh) => {
  scene.add(mesh);
});

const controls = new THREE.OrbitControls(camera);
/*
* All of our example functions will take scene, camera, mesh, geometry, and material params
* and modify them.
* We'll then call them in the init function.
*/

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
animate();
