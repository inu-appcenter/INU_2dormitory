import React, { Component } from 'react';
import InputContainer from 'container/InputContainer';
import AppTemplate from './AppTemplate';

class App extends Component {
  render() {
    return (
      <AppTemplate
        input={<InputContainer />}
      />
    );
  }
}

export default App;