import React from "react";
import { render } from "react-testing-library";
import 'jest-dom/extend-expect'
import { IdCard } from "./IdCard";

test("should display name", () => {
  const { getByText } = render(
    <IdCard user={{ name: "Simon Somon Swanson" }} />
  );
  expect(getByText(/ID Card for/i)).toHaveTextContent("Simon");
});
