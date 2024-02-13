import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);

const NewPage = () => {
  const scene = app.load(
    "https://prod.spline.design/T1-r6c62gKTCGoVw/scene.splinecode"
  );

  return (
    <div>
      <Spline scene={scene} />
    </div>
  );
};

export default NewPage;
