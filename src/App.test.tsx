import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("Home", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });

  it("Should have heading", () => {
    const title = screen.getByText("Nyankopedia");
    expect(title).toBeInTheDocument();
  });


  it("Should show loading state", () => {
    const loading = screen.getByLabelText("loading");
    expect(loading).toBeTruthy()
  });
  it("Should have initial nyan 10 card", () => {
    setTimeout(() => {
      const card = screen.getAllByTestId("card");
      expect(card.length).toEqual(10);
    }, 5000);
  });
});

