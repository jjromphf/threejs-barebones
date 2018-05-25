// three.js
import * as _THREE from 'three';

// Addons
import loadAddOns from './utils';
import { createCubes, rotateCubes, addCubesToScene } from './CubeStuff';
const THREE = loadAddOns(_THREE);

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 30;
const scene = new THREE.Scene();

let cubes = createCubes(100, 0.25);
addCubesToScene(cubes, scene);

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
  rotateCubes(cubes);
  renderer.render(scene, camera);
}

init();
animate();
