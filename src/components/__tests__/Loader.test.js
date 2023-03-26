import React from "react";
import { render } from "@testing-library/react";
import Loader from "../Loader";

describe("Loader component", () => {
  it("renders a spinner image with the correct src and alt attributes", () => {
    const { getByAltText } = render(<Loader />);
    const spinnerImage = getByAltText("loader");
    expect(spinnerImage).toBeInTheDocument();
    expect(spinnerImage).toHaveAttribute("src", "/assets/images/spinner.svg");
  });
});
