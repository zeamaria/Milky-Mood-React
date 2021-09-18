import React from "react";
import { Image } from "./styles";

const ImgBox = ({ x, y }) => {
  console.log(x);
  return <Image $initalX={x} $initalY={y} />;
};

export default ImgBox;
