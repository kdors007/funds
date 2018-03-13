import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './calendar'

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick.bind(this)
  }

  handleClick(e) {
    if (e.target.className === "green") {
      e.target.className="red"      
    } else {
      e.target.className="green"
    }

    // this.setState({active: 'green'})
  } 
  render() {
    return (
      <div className="container">
        <Calendar />
      </div>
    );
  }
}

export default App;
