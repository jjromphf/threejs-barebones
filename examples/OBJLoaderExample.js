// three.js
import * as _THREE from 'three';

// Addons
import loadAddOns from '../src/utils';

const THREE = loadAddOns(_THREE);


export function loadMeshWithMaterials(mesh, material, path) {
  return new Promise((resolve, reject) => {
    const mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath(path);
    mtlLoader.load(material, (materials) => {
      const objLoader = new THREE.OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath(path);
      objLoader.load(mesh, (mesh) => {
        centerGeometry(mesh);
        resolve(mesh);
      })
    });
  });
}

function centerGeometry(mesh) {
  let box = new THREE.Box3().setFromObject(mesh);
  let offset = new THREE.Vector3();
  offset = box.getCenter(offset).negate();
  mesh.children.forEach(child => {
    child.geometry.translate(offset.x, offset.y, offset.z);
  });
}
