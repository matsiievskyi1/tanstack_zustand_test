import { render, screen } from "@testing-library/react";
import { Main } from "./Main";
import { pageRoutes } from "../global/routes";
import { BrowserRouter } from "react-router-dom";

test("rendes a list of available urls", () => {
  const testRoute = "main";
  render(
    <BrowserRouter>
      <Main pageRoutes={pageRoutes} />
    </BrowserRouter>,
  );
  const linkElements = screen.getAllByRole("navigation");
  expect(linkElements[0]).toHaveTextContent(pageRoutes[testRoute].title);
  expect(linkElements[0]).toHaveAttribute("href", pageRoutes[testRoute].path);
});
