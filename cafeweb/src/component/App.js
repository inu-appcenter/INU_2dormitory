import React, { Component } from "react";
import DomitoryContainer from "../container/DomitoryContainer";
import AppTemplate from "./AppTemplate";

class App extends Component {
  render() {
    return <AppTemplate domitory={<DomitoryContainer />} />;
  }
}

export default App;
