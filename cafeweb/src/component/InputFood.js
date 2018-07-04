import React, { Component } from "react";

class InputFood extends Component {
  render() {
    const {date,name} = this.props;
    return (
      <React.Fragment>
        <td id="BreakA">
          <textarea name = {name}/>
        </td>
      </React.Fragment>
    );
  }
}

export default InputFood;
