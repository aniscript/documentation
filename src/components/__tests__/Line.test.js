import React from "react";
import { render } from "@testing-library/react";
import Line from "../Line";

describe("Line component", () => {
  it("renders a horizontal line with the given background color and height", () => {
    const background = "red";
    const height = "2px";
    const { container } = render(
      <Line background={background} height={height} />
    );
    const line = container.firstChild;
    expect(line).toHaveStyle(`background-color: ${background}`);
    expect(line).toHaveStyle(`height: ${height}`);
    expect(line).toHaveStyle("border: none");
  });
});
