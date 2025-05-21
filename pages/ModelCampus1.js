import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ModelCampus1() {
  const gltf = useLoader(GLTFLoader, '/campusUnoItcm.glb');
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
        console.log(child.material);
    }
});

  return <primitive object={gltf.scene}/>;
}