import React from "react";
import {render, fireEvent, cleanup, getByTestId} from "@testing-library/react";
import QueryComponent from "../components/QueryComponent";

afterEach(cleanup);

describe("Testing input field, submit button", () => {
  const {container} = render(<QueryComponent />);
  const inputQuery = getByTestId(container, "queryInput");
  const submitButton = getByTestId(container, "queryButton");
  const word = getByTestId(container, "inputWord");
  const newQuery = "Hello";

  fireEvent.change(inputQuery, {target: {value: newQuery}});
  fireEvent.click(submitButton);

  test("Input field is updated on button submit", () => {
    expect(word.textContent).toBe("Searched: " + newQuery);
  });
});
