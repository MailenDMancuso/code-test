import { render, screen } from "@testing-library/react";
import LandingPage from "../LandingPage";

test("Renders the main Landing Page title", () => {
  render(<LandingPage />);

  const title = screen.getByText("Welcome!");
  expect(title).toBeInTheDocument();
});
