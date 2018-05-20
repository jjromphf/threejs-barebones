// three.js
import * as _THREE from 'three';

// Addons
import loadAddOns from '../src/utils';

const THREE = loadAddOns(_THREE);

export function cubeOnPlane(scene) {
  var boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
	var boxMaterial = new THREE.MeshPhongMaterial({ color: 'rgb(255, 255, 255)' });
  var planeGeometry = new THREE.PlaneGeometry(20, 20, 20, 20);
  var planeMaterial = new THREE.MeshPhongMaterial({ color: 'rgb(255, 255, 255)'});
  var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

  planeMesh.receiveShadow = true;
  boxMesh.castShadow = true;

  scene.add(planeMesh);
  scene.add(boxMesh);

  planeMesh.rotation.x = - Math.PI * 0.5;
  planeMesh.position.set(0, -0.5, 0);
  return [boxMesh, planeMesh];
}

export function addLights(scene, nLights) {
  var lights = [];
  for (var i = 0; i < nLights; i++) {
    var lightColors = [parseInt(Math.random() * 255, 10), parseInt(Math.random() * 255, 10), parseInt(Math.random() * 255, 10)];
    var color = 'rgb(' + lightColors.join(',') + ')';
    var light = new THREE.PointLight(color, 1.0, 100);
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
  	light.shadow.mapSize.height = 1024;
  	light.shadow.camera.near = 1;
  	light.shadow.camera.far = 10;
    scene.add(light);
    lights.push(light);
  }
  return lights;
}

export function changeLightPositions(lights) {
  var time = Date.now() * 0.0005;
  lights.forEach((light, index) => {
    light.position.x = Math.sin(time) * index * Math.random();
    light.position.y = Math.cos(time) * index * Math.random();
    light.position.z = Math.cos(time) *  index * Math.random();
  });
}
