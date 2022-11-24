import React from "react";
import ClickCounter from "./Click";
import HoverCounter from "./Hover";

const HigherOrderMain = () => {
  return (
    <div className="higherOrder">
      <h1> What are Higher Order Component in React?</h1>
      <p>
        A higher-order component (HOC) is an advanced technique in React for
        reusing component logic. HOCs are not part of the React API, per se.
        They are a pattern that emerges from React’s compositional nature.
      </p>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
};

export default HigherOrderMain;
