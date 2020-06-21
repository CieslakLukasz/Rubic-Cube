import React from 'react';

export default function RubicXZ({el, rubicByXZ, oneCubeSize, XZstyle}) {
  let rotate;
  if(el === -1){
    rotate = XZstyle.left;
  }else if(el === 0){
    rotate = XZstyle.mid;
  }else{
    rotate = XZstyle.right;
  }

  let style;
  if(rotate === 0){
style = {
  transform: `rotateX(90deg) rotateZ(${rotate}deg) translateY(-${1.5*oneCubeSize}px) translateX(-${1.5*oneCubeSize}px) translateZ(${
    (el+1) * -oneCubeSize
  }px)`,

  transformStyle: "preserve-3d",
  opacity: `1`
}}else{
  style = {
    transform: `rotateX(90deg) rotateZ(${rotate}deg) translateY(-${1.5*oneCubeSize}px) translateX(-${1.5*oneCubeSize}px) translateZ(${
      (el+1) * -oneCubeSize
    }px)`,
    transition: `1s all`,
    transformStyle: "preserve-3d",
    opacity: `1`
}}


    return (
        <div className='XZ'
        style={style}
      >
        <div className="face full">
          {rubicByXZ.top.slice(9*el +9, 9 * el + 18).map((color) => (
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
          {rubicByXZ.left.slice(3 * el +3 , 3 * el + 6).map((color) => (
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
          {rubicByXZ.right.slice(3 * el +3 , 3 * el + 6).map((color) => (
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
          {rubicByXZ.front.slice(3 * el +3 , 3 * el + 6).map((color) => (
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
          {rubicByXZ.back.slice(3 * el +3 , 3 * el + 6).map((color) => (
            <div style={{ backgroundColor: color }}/>            ))}
        </div>
        <div
          className="face full"
          style={{
            transform: `rotateX(180deg) translateZ(${oneCubeSize}px)`,
          }}
        >
          {rubicByXZ.bottom.slice(9 * el+9, 9 * el + 18).map((color) => (
            <div style={{ backgroundColor: color }}/>            ))}
        </div>
      </div>
    )
}
