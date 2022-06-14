import React, { useRef, useEffect, useState } from "react";
import { Stage, Layer, Shape } from "react-konva";

const HomePageBG = () => {
  const stageRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <Stage width={dimensions.width} height={dimensions.height} ref={stageRef}>
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, dimensions.height);
            context.bezierCurveTo(2500, 4500, 200, dimensions.height, 3500, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#E4ED58"
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 1800);
            context.bezierCurveTo(2500, 6000, -700, dimensions.width, 2500, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#F2944E"
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 900);
            context.bezierCurveTo(200, 850, 650, 1800, 2000, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#BD5487"
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 1800);
            context.bezierCurveTo(450, 1650, 800, 750, 1800, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#930065"
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 1400);
            context.bezierCurveTo(300, 1400, 1700, -1100, 4000, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#5D3C76"
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 830);
            context.bezierCurveTo(850, 650, 400, 200, 1700, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#005F9E"
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 650);
            context.bezierCurveTo(800, 400, 300, 150, 1200, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#1C1237"
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 500);
            context.bezierCurveTo(650, 250, 250, 150, 600, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#2E2526"
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 350);
            context.bezierCurveTo(400, 180, 150, 100, 400, 0);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="#E4ED58"
        />
      </Layer>
    </Stage>
  );
};

export { HomePageBG };
