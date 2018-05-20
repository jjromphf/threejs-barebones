// three.js
import * as _THREE from 'three';

// Addons
import loadAddOns from '../src/utils';

const THREE = loadAddOns(_THREE);

export default function drawCubeWithLight(scene) {
  var boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
	var boxMaterial = new THREE.MeshPhongMaterial({ color: 'rgb(100, 0, 0)' });
  var planeGeometry = new THREE.PlaneGeometry(20, 20, 20, 20);
  var planeMaterial = new THREE.MeshPhongMaterial({ color: 'rgb(125, 125, 125)'});
  var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
  var light = new THREE.PointLight('rgb(255, 255, 255)', 1.0, 100);

  light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	light.shadow.camera.near = 1;
	light.shadow.camera.far = 10;
  light.position.set(10,10,10);

  light.castShadow = true;
  planeMesh.receiveShadow = true;
  boxMesh.castShadow = true;

  scene.add(planeMesh);
  scene.add(boxMesh);
  scene.add(light);

  var sphereSize = 1;
  var pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
  var shadowCamHelper = new THREE.CameraHelper(light.shadow.camera);

  scene.add(shadowCamHelper);
  scene.add(pointLightHelper);
	planeMesh.rotation.x = - Math.PI * 0.5;
  planeMesh.position.set(0, -0.5, 0);
  return light;
}
