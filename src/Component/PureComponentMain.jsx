import React from "react";
import PureComp from "./PureComponent";

const PureCompMain = () => {
  return (
    <div className="ontainer pureComponent">
      <h1> What are Pure Components in React?</h1>
      <p>
        Pure Components in React are the components that do not re-renders when
        the value of state and props has been updated with the same values. For
        this type of class component, React provides the PureComponent base
        class. Class components that extend the React.PureComponent class are
        treated as pure components. Pure components have some performance
        improvements and render optimizations since React implements the
        shouldComponentUpdate() method for them with a shallow comparison for
        props and state.
      </p>
      <PureComp />
    </div>
  );
};

export default PureCompMain;
