// three.js
import * as _THREE from 'three';

// Addons
import loadAddOns from '../src/utils';

const THREE = loadAddOns(_THREE);

export default function drawCube() {
  var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
	var material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  var mesh = new THREE.Mesh(geometry, material);
  return mesh;
}
