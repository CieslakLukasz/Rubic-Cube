import React from 'react';
import Arrow from './Arrow';

export default function RubicYZ({rubicByYZ, oneCubeSize, control}) {
    const {leftXZ, rightXZ, leftXY, rightXY, leftYZ, rightYZ} = control;
    const site = {
        top:'top',
        left: 'left'
    }
    let oneCubeSizeControl = oneCubeSize + 1

let leftXZleft= (ind) => {
    leftXZ(ind)
  }
let rightXZright =(ind)=> {
  rightXZ(ind)
}
let leftYZleft= (ind) => {
    leftYZ(ind)
  }
let rightYZright =(ind)=> {
  rightYZ(ind)
}
let leftXYleft= (ind, site) => {
    leftXY(ind, site)
  }
let rightXYright =(ind, site)=> {
rightXY(ind,site)
}

    return (
        <div className='control'
        style={{
          transform: `translateX(-${1.5*oneCubeSizeControl}px) translateY(-${1.5*oneCubeSizeControl+1}px) translateZ(${1.5*oneCubeSizeControl}px)`,
          transformStyle: "preserve-3d",
          opacity: `1`
      }}
      >
        <div className="full face">
        {rubicByYZ.left.map((color, ind) => (
            <Arrow color={color} l={leftXZleft} r={rightXZright} u={rightYZright} d={leftYZleft} ind={ind}/>
            ))}
        </div>
        <div className="face full"
          style={{
            transform: `rotateX(90deg) translateZ(${
                +1.5*oneCubeSizeControl}px) translateY(-${1.5*oneCubeSize}px)`,
          }}
        >
        {rubicByYZ.back.map((color,ind) => (
            <Arrow color={color} l={leftXYleft} r={rightXYright} u={rightYZright} d={leftYZleft} ind={ind} site={site.top}/>
          ))}
        </div>
        <div
          className="face full"
          style={{
            transform: ` translateY(0) translateX(50%) translateZ(${
              -1.5*oneCubeSizeControl}px) rotateX(0deg) rotateY(-90deg)`,
          }}
        >
        {rubicByYZ.front.map((color,ind) => (
            <Arrow color={color} l={rightXZright} r={leftXZleft} u={rightXYright} d={leftXYleft} ind={ind}/>
            ))}
        </div>
        <div
          className="face full"
          style={{
            transform: `translateY(${1.5*oneCubeSizeControl}px) translateZ(${
              -1.5*oneCubeSizeControl}px) rotateX(90deg)`,
          }}
        >
          {rubicByYZ.bottom.map((color,ind) => (
            <Arrow color={color} l={rightXYright} r={leftXYleft} u={leftYZleft} d={rightYZright} ind={ind} site={site.top}/>
            ))}
        </div>
        <div
          className="face full"
          style={{
            transform: `rotateX(0deg) rotateY(-90deg) translateX(-${1.5*oneCubeSizeControl}px) translateZ(${
                1.5*oneCubeSizeControl}px)`,
          }}
        >
          {rubicByYZ.top.map((color,ind) => (
            <Arrow color={color} l={leftXZleft} r={rightXZright} u={leftXYleft} d={rightXYright} ind={ind}/>
            ))}
        </div>
        <div
          className="face full"
          style={{
            transform: `rotateX(0deg) rotateY(0deg) translateZ(${-3*oneCubeSizeControl}px)`,
          }}
        >
        {rubicByYZ.right.map((color,ind) => (
            <Arrow color={color} l={rightXZright} r={leftXZleft} u={leftYZleft} d={rightYZright} ind={ind}/>
          ))}
        </div>
      </div>
    )
}