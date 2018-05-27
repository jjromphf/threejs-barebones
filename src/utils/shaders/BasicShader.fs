uniform sampler2D tDiffuse;
uniform float pixelSize;
uniform vec2 resolution;

varying highp vec2 vUv;

void main() {
  
  gl_FragColor = texture2D(tDiffuse, vUv);

}
