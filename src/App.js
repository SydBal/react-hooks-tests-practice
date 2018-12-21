import React, { Component } from 'react';
import './App.css';
import { BallResizer } from './BallResizer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BallResizer
          initialSize={200}
          minSize={150}
          maxSize={250}
        />
      </div>
    );
  }
}

export default App;
