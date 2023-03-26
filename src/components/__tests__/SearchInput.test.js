import React from "react";
import { render, screen } from "@testing-library/react";
import SearchInput from "../SearchInput";

describe("SearchInput component", () => {
  it("renders a search input with the correct attributes", () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText(
      "Search for documentations"
    );
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "text");
    expect(searchInput).toHaveAttribute("id", "searchInput");
  });
});
