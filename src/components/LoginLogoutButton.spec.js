import React from "react";
import { render, waitForElement, fireEvent } from "react-testing-library";
import LoginLogoutButton from "./LoginLogoutButton";

test("Login/logout", async () => {
  const { getByText } = render(<LoginLogoutButton />);
  await waitForElement(() => getByText(/login/i));

  fireEvent.click(getByText(/login/i));

  await waitForElement(() => getByText(/logout/i));
});
