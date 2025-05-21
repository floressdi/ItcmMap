import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ModelCampus2() {
  const gltf = useLoader(GLTFLoader, '/campus2/campusDosItcm.glb');
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
        console.log(child.material);
    }
});

  return <primitive object={gltf.scene}/>;
}