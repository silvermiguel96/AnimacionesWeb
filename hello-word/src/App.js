import React, { Component } from 'react';
import logo from './logo.svg';
import logoPlatzi from './platzi.png';
import './App.css';
// import {CSSTransition} from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
  
  state = {
    logo: logo,
  }
  onClick() {
    this.setState({
      logo: logoPlatzi,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <CSSTransition 
        classNames="fade"
        timeout={{ enter: 1000,exit: 1000 }}
        >
          <img 
           key={this.state.logo}
           src={this.state.logo}
           className="App-logo" 
           alt="logo" 
           />
        </CSSTransition>
        <h2>Hola word!</h2>
        <button onClick={this.onClick.bind(this)}>Click me!</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
