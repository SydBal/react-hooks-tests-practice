import React from "react";

const Ball = ({ size }) => {
  return (
    <>
      <div
        className="ball"
        style={{
          "--size": size
        }}
      />
      <div
        className="ballShadow"
        style={{
          "--size": size
        }}
      />
    </>
  )
}

export { Ball };