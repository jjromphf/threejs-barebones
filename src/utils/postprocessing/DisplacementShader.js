const DisplacementShader = {

    uniforms: {
      "tDiffuse": { value: null },
      "tDisplacement": { value: null },
      "scale": { value: 1 },
    },

    vertexShader: [

      "varying highp vec2 vUv;",
      "uniform sampler2D tDisplacement;",
      "void main() {",

      "vUv = uv;",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

      "}"

    ].join( "\n" ),

    fragmentShader: [

      "uniform sampler2D tDiffuse;",
      "uniform float pixelSize;",
      "uniform vec2 resolution;",

      "varying highp vec2 vUv;",

      "void main(){",

      "gl_FragColor = texture2D(tDiffuse, vUv);",

      "}"

    ].join( "\n" )
  }
}

export default DisplacementShader;
