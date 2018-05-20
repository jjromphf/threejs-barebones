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

}

function animate() {
  
}

init();
animate();
