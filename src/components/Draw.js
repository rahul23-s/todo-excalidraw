import React, { useState } from "react";
import Excalidraw from "@excalidraw/excalidraw";
import styled from "styled-components";
import InitialData from "./InitialData";


const Draw = () => {
  const onChange = (elements, state) => {
    console.log("Elements :", elements, "State : ", state);
  };

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const { width, height } = dimensions;
  const options = { zenModeEnabled: true, viewBackgroundColor: "#FFFFFF" };
  return (
    <Container>
      <Excalidraw
        width={width}
        height={height}
        onResize={onResize}
        initialData={InitialData}
        onChange={onChange}
        user={{ name: "Excalidraw User" }}
        options={options}
      />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
  width: 100vw;
  height: 100vh;
`;


export default Draw;
