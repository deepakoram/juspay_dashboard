import Lottie from "react-lottie";
import loader from "../Constants/Loading.json"

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex_center" style={{height:"100vh"}}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loader;
