import React from "react";
import * as loadingData from "./loading.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

const Loading = () => {
  return (
    <FadeIn>
      <div>
        <Lottie options={defaultOptions} height={80} width={80} />
      </div>
    </FadeIn>
  );
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default Loading;
