// three.js
import * as _THREE from 'three';

// Addons
import loadAddOns from './utils';

// examples
import drawCube from '../examples/Cube';
import drawCubeWithLight from '../examples/CubeWithLight';
import {cubeOnPlane, addLights, changeLightPositions} from '../examples/CubeWithManyLights';

const THREE = loadAddOns(_THREE);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;

let camera, controls, lights, cube, plane;
let scene = new THREE.Scene();
/*
* All of our example functions will take scene, camera, mesh, geometry, and material params
* and modify them.
* We'll then call them in the init function.
*/

function initCamera() {
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 1;
  controls = new THREE.OrbitControls(camera, renderer.domElement);
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
}

function init() {
  [cube, plane] = cubeOnPlane(scene);
  lights = addLights(scene, 5);
  initCamera();
}

function animate() {
  requestAnimationFrame(animate);
  changeLightPositions(lights);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.05;
	renderer.render( scene, camera );
}

init();
animate();
