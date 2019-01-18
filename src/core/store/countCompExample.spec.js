import React from "react";
import useStore from "./useStore";
import "jest-dom/extend-expect";
import StoreProvider from "./StoreProvider";
import { render, fireEvent, waitForElement } from "react-testing-library";

test("useStore will import correct store", async () => {
  const Comp = () => {
    const { count, increment, decrement } = useStore("count");

    return (
      <div>
        <div data-testid="count">count is: {count}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    );
  };

  const { getByText, getByTestId } = render(
    <StoreProvider>
      <Comp />
    </StoreProvider>
  );

  const countIs = num =>
    expect(getByTestId("count")).toHaveTextContent(`${num}`);

  const clickOnText = text => fireEvent.click(getByText(RegExp(`${text}`)));

  countIs(0);

  clickOnText("increment");
  countIs(1);

  clickOnText("increment");
  countIs(2);

  clickOnText("decrement");
  countIs(1);
});
