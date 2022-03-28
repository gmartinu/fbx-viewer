import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { default as PropTypes } from "prop-types";
import { useMemo } from "react";

function Loader({ path }) {
  const fbx = useLoader(FBXLoader, path);
  const copie = useMemo(() => fbx.clone(), [fbx])

  return <primitive object={copie} is="three" dispose={null} />;
}

Loader.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Loader;
