varying highp vec2 vUv;
uniform sampler2D tDisplacement;
uniform sampler2D tDiffuse;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
