import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filterString: '',
      foods: ['pasta','sushi','cake','cookies']
    }
  }
  handleChange( filter ){
    this.setState({ filterString: filter })
  }
  
  render() {
    var foodsToDisplay = this.state.foods.filter( (element, index) => {
      return element.includes( this.state.filterString );
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })
    return (
      <div className="ShowFoods">
        <h2>{foodsToDisplay}</h2>
        <input onChange = {(e) => this.handleChange(e.target.value)} type = 'text'></input>
      </div>
    )
  }
}

export default App;
