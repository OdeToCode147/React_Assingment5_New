import React, { Component } from "react";

const Updated = (Original) => {
  class New extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <Original
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return New;
};
export default Updated;
