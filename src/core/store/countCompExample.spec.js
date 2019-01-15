import React from "react";
import useStore from "./useStore";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";

test("useStore will import correct store", async () => {
  const Comp = () => {
    const { count } = useStore("count");

    return (
      <div>
        <div data-testid="count">count is: {count}</div>
      </div>
    );
  };

  const { getByTestId } = render(<Comp />);

  expect(getByTestId("count")).toHaveTextContent("0");
});
