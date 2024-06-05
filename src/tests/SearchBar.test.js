import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  test("renders the component", () => {
    render(<SearchBar value="" onChangeHandler={() => {}} />);
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
  });

  test("has correct initial value", () => {
    render(<SearchBar value="initial test value" onChangeHandler={() => {}} />);
    const searchInput = screen.getByTestId("search-input");
    // @ts-ignore
    expect(searchInput.value).toBe("initial test value");
  });

  test("calls the onChange handler function", () => {
    const handleChange = jest.fn(() => {});
    render(<SearchBar value="" onChangeHandler={handleChange} />);
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "test user name" } });

    // @ts-ignore
    expect(searchInput.value).toBe("test user name");
    expect(handleChange).toBeCalledTimes(1);
  });
});
