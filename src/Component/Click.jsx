import React, { Component } from "react";
import Updated from "./HigherOrder";

class Click extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button className="btn btn-danger" onClick={incrementCount}>
        Clicked {count} Times
      </button>
    );
  }
}
export default Updated(Click);
