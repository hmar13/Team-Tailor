import React from "react";
import {render, screen, cleanup, getByText} from "@testing-library/react";
import CategoriesComponent from "../components/CategoriesComponent";

afterEach(cleanup);

const props = ["Animals", "Celebrities", "Destinations"];

describe("Snapshot", () => {
  it("take a snapshot", () => {
    const {asFragment} = render(<CategoriesComponent />);
    expect(asFragment(<CategoriesComponent />)).toMatchSnapshot();
  });
});

describe("Unit Testing", () => {
  test("renders title", () => {
    const {container} = render(<CategoriesComponent />);
    expect(getByText(container, "by Category..")).toBeInTheDocument();
  });

  test("Renders buttons with props", () => {
    render(<CategoriesComponent props={props} />);
    const buttonName = screen.getByText("Animals");
    expect(buttonName).toBeInTheDocument();
  });
});
