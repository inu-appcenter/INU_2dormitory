import React, { Component } from "react";

class FormDay extends Component {
  render() {
    return (
      <React.Fragment>
        <th>{this.props.date}</th>
      </React.Fragment>
    );
  }
}

export default FormDay;
