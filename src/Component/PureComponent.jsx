import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "S U R Y A ",
    };
  }
  changeName = () => {
    this.setState({ name: "V A M S I " });
  };
  render() {
    return (
      <div>
        <h3 className="Change">{this.state.name}</h3>
        <button className="btn btn-light" onClick={() => this.changeName()}>
          Click Here
        </button>
      </div>
    );
  }
}
