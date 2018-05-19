import * as _THREE from 'three';
import loadAddOns from './utils';

const THREE = loadAddOns(_THREE);

const renderer = new THREE.WebGLRenderer({ antialias: true });

let scene, camera, mesh, geometry, material, controls;

/*
* All of our example functions will take scene, camera, mesh, geometry, and material params
* and modify them.
* We'll then call them in the init function.
*/

function init() {
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshBasicMaterial({ color: 0xcccccc });

	mesh = new THREE.Mesh(geometry, material);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
	scene.add( mesh );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
}

function animate() {
  requestAnimationFrame(animate);

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	renderer.render( scene, camera );
}

init();
animate();
