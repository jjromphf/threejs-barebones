// three.js
import * as _THREE from 'three';

// Addons
import loadAddOns from './utils';

// Shaders
import BasicShader from './utils/postprocessing/BasicShader';

const THREE = loadAddOns(_THREE);

export function imageTextureToMesh(image) {
  return new Promise((resolve, reject) => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(image, (texture) => {
      let width = texture.image.width / 4;
      let height = texture.image.height / 4;
      const plane = new THREE.PlaneGeometry(2, 2, width-1, height-1);
      DisplacementShader.uniforms['tDiffuse'].value = texture;
      const material = new THREE.ShaderMaterial({
        vertexShader: BasicShader.vertexShader,
        fragmentShader: BasicShader.fragmentShader,
        uniforms: BasicShader.uniforms,
      });
      const mesh = new THREE.Mesh(plane, material);
      resolve(mesh);
    })
  });
}
