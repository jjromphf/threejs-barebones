import loadOrbitControls from './OrbitControls';
import loadOBJLoader from './loaders/OBJLoader';
import loadMTLLoader from './loaders/MTLLoader';

export default function loadAddOns(_three) {
  loadOrbitControls(_three);
  loadOBJLoader(_three);
  loadMTLLoader(_three);
  return _three;
}
