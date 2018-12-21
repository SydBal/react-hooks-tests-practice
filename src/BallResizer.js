import React from "react";
import { Ball } from "./Ball"

const BallResizer = ({
  initialSize,
  minSize,
  maxSize
}) => {
  const ballSize = initialSize
  return (
    <>
      <Ball size={ballSize} />
      <input
        type="range"
        className="slider"
        min={minSize}
        max={maxSize}
        value={ballSize}
      />
    </>
  )
}

export { BallResizer };