const vertexShader = require('../shaders/DisplacementShader.vs');
const fragmentShader = require('../shaders/DisplacementShader.fs');

const DisplacementShader = {

    uniforms: {
      "tDiffuse": { value: null },
      "tDisplacement": { value: null },
      "scale": { value: 1 },
    },

    vertexShader: vertexShader,

    fragmentShader: fragmentShader,
}

export default BasicShader;
