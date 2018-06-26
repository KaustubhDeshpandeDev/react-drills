import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      foods: ['yogurt ','milk ','cookies ','pasta ']
    }
  }
  render() {

    return (
      <h2 className="ShowList">
        { (this.state.foods) }
      </h2>
    );
  }
}

export default App;