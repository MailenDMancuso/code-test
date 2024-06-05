/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SortingOption from "../components/SortigOption";

describe("Sorting button", () => {
  const handleClick = jest.fn(() => {});
  let sortingButton;

  beforeEach(() => {
    render(
      <SortingOption
        label="asc"
        disableOption={false}
        onClickHandler={handleClick}
      />
    );
    sortingButton = screen.getByTestId("sorting-asc");
  });

  test("Renders the component", () => {
    expect(sortingButton).toBeInTheDocument();
  });

  test("onClick handler is being called when clicking on button", () => {
    fireEvent.click(sortingButton);
    expect(handleClick).toBeCalledTimes(1);
  });
});
