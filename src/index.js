// three.js
import * as _THREE from 'three';

// Addons
import loadAddOns from './utils';

// examples
import drawCube from '../examples/Cube';
import drawCubeWithLight from '../examples/CubeWithLight';

const THREE = loadAddOns(_THREE);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;

let camera, controls, light;
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
  light = drawCubeWithLight(scene);
  initCamera();
}

function animate() {
  requestAnimationFrame(animate);
  var time = Date.now() * 0.0005;
  light.position.x = Math.sin(time) * 2;
  light.position.y = Math.cos(time) * 2;
  light.position.z = Math.tan(time) * 2;
	renderer.render( scene, camera );
}

init();
animate();
