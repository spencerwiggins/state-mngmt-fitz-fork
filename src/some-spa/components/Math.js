import React from "react";
import useStore from "../../core/store/useStore";

const Math = () => {
  const { count, multiply } = useStore("math");

  return (
    <>
      <div>{count}</div>
      <button onClick={() => multiply(10)}>*</button>
    </>
  );
};

export default Math;
