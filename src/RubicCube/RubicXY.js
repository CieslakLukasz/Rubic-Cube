import React from "react";

export default function RubicXY({el, rubicByXY, oneCubeSize , XYstyle}) {
  let rotate;
  if(el === -1){
    rotate = XYstyle.left;
  }else if(el === 0){
    rotate = XYstyle.mid;
  }else{
    rotate = XYstyle.right;
  }
  let style;
  if(rotate === 0){
style = {
  transform: `rotateX(0deg) rotateZ(${rotate}deg) translateX(-${1.5*oneCubeSize}px) translateY(-${1.5*oneCubeSize}px) translateZ(${
    (el - 0.5) * -oneCubeSize
  }px)`,

  transformStyle: "preserve-3d",
  opacity: `1`,
}}else{
  style = {
    transform: `rotateX(0deg) rotateZ(${rotate}deg) translateX(-${1.5*oneCubeSize}px) translateY(-${1.5*oneCubeSize}px) translateZ(${
      (el - 0.5) * -oneCubeSize
    }px)`,
    transition: `1s all`,
    transformStyle: "preserve-3d",
    opacity: `1`,
  }}

  return (
    <div
      className="XY"
      style={style}
    >
      <div className="full face">
        {rubicByXY.front.slice(9 * el + 9, 9 * el + 18).map((color) => (
          <div style={{ backgroundColor: color }}/>            ))}
      </div>
      <div
        className="face partX"
        style={{
          transform: ` translateY(${oneCubeSize}px) translateX(-50%) translateZ(${
            -oneCubeSize / 2
          }px) rotateX(90deg) rotateY(90deg)`,
        }}
      >
        {rubicByXY.left.slice(3 * el + 3, 3 * el + 6).map((color) => (
          <div style={{ backgroundColor: color }}/>            ))}
      </div>
      <div
        className="face partX"
        style={{
          transform: ` translateY(${oneCubeSize}px) translateX(50%) translateZ(${
            -oneCubeSize / 2
          }px) rotateX(90deg) rotateY(-90deg)`,
        }}
      >
        {rubicByXY.right.slice(3 * el + 3, 3 * el + 6).map((color) => (
          <div style={{ backgroundColor: color }}/>            ))}
      </div>
      <div
        className="face partX"
        style={{
          transform: `translateY(${oneCubeSize * 2.5}px) translateZ(${
            -oneCubeSize / 2
          }px) rotateX(90deg)`,
        }}
      >
        {rubicByXY.bottom.slice(3 * el + 3, 3 * el + 6).map((color) => (
          <div style={{ backgroundColor: color }}/>            ))}
      </div>
      <div
        className="face partX"
        style={{
          transform: ` translateY(${-(oneCubeSize * 0.5)}px) translateZ(${
            -oneCubeSize / 2
          }px) rotateX(90deg) rotateY(180deg)`,
        }}
      >
        {rubicByXY.top.slice(3 * el + 3, 3 * el + 6).map((color) => (
          <div style={{ backgroundColor: color }}/>            ))}
      </div>
      <div
        className="face full"
        style={{
          transform: `rotateX(180deg) translateZ(${oneCubeSize}px)`,
        }}
      >
        {rubicByXY.back.slice(9 * el + 9, 9 * el + 18).map((color) => (
          <div style={{ backgroundColor: color }}/>            ))}
      </div>
    </div>
  );
}
