const vertexShader = require('../shaders/BasicShader.vs');
const fragmentShader = require('../shaders/BasicShader.fs');

const BasicShader = {

    uniforms: {
      "tDiffuse": { value: null },
    },

    vertexShader: vertexShader,

    fragmentShader: fragmentShader,
}

export default BasicShader;
