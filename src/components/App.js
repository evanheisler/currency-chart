import React, { Component } from 'react';
import { ReactComponent as Loading } from 'components/LoadingIcon.svg';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <Loading />
      </div>
    );
  }
}

export default App;
