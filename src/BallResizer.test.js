import React from "react";
import {
  render,
  fireEvent,
  cleanup
} from "react-testing-library";

import { BallResizer } from "./BallResizer"

afterEach(cleanup);

describe("move slider changes ball size", () => {
  let sliderElem, ballElem;
  const initialSize = 200;
  const minSize = 150;
  const maxSize = 250;

  beforeEach(() => {
    const { container } = render(
      <BallResizer
        initialSize={initialSize}
        minSize={minSize}
        maxSize={maxSize}
      />
    );
    sliderElem = container.querySelector(".slider");
    ballElem = container.querySelector(".ball");
  })

  test("when mounts initial size of ball", () => {
    expect(ballElem.clientWidth).toBe(initialSize);
    expect(ballElem.clientHeight).toBe(initialSize);
  });

  test("when slide value is between range", () => {
    fireEvent.change(sliderElem, {
      target: { value: 220 }
    });
    expect(ballElem.clientHeight).toBe(220);
    expect(ballElem.clientWidth).toBe(220);
  });

  test("when slide value is more than max", () => {
    fireEvent.change(sliderElem, {
      target: { value: 400 }
    });
    expect(ballElem.clientHeight).toBe(maxSize);
    expect(ballElem.clientWidth).toBe(maxSize);
  });

  test("when slide value is less than min", () => {
    fireEvent.change(sliderElem, {
      target: { value: 0 }
    });
    expect(ballElem.clientHeight).toBe(minSize);
    expect(ballElem.clientWidth).toBe(minSize);
  });
});
