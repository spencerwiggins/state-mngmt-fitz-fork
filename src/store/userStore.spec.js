import React from "react";
import useStore from "./useStore";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";

test("useStore will import correct store", async () => {
  const Comp = () => {
    const { currentUser } = useStore("CurrentUser");

    return (
      <div>
        <div data-testid="user">{currentUser}</div>
      </div>
    );
  };

  const { getByTestId } = render(<Comp />);

  expect(getByTestId("user")).toBeNull;
});
