import { render, screen } from "@testing-library/react";

import TestComponent from "./TestComponent";

test("renders Hello World text", () => {
  render(<TestComponent />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
