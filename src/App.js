import React, { Component } from 'react';
import Game from './TicTacToe'
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Coba extends Component{
  constructor(props) {
    super(props);
    this.state = {tulisan:'',nama:"LING"};

    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(event){
    console.log("asd")
    this.setState({tulisan:event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.tulisan} onChange={this.handleKeyUp}/>
        <p>{this.state.tulisan}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Lingjul" />
        <Game/>
      </header>
    </div>
  );
}

export default App;
