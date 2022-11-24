import React, { Component } from "react";
import Updated from "./HigherOrder";

class Hover extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <h2 className="hovered" onMouseOver={incrementCount}>
        hovered {count} times
      </h2>
    );
  }
}
export default Updated(Hover);
