import React from "react";
import useStore from "../../core/store/useStore";
import "jest-dom/extend-expect";
import { render, fireEvent, waitForElement } from "react-testing-library";
import StoreProvider from "../../core/store/StoreProvider";
import * as stores from "../stores";
import Count from "./Count";

test("<Count />", async () => {
  const { getByText, getByTestId } = render(
    <StoreProvider stores={stores}>
      <Count />
    </StoreProvider>
  );

  const countIs = num =>
    expect(getByText(/count\:/i)).toHaveTextContent(`${num}`);

  countIs(0);

  fireEvent.click(getByText(/\+/i));
  countIs(1);

  fireEvent.click(getByText(/\+/i));
  countIs(2);

  fireEvent.click(getByText(/\-/i));
  countIs(1);
});
