import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator'
import {Bootstrap, Grid, Row, Col, Button, Form, FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup} from 'react-bootstrap';
/*import './App.css';*/

class App extends Component {
  render() {
   return (
      <div className="App">
        <div className="App-header">
          
           <Calculator />
        </div>
      </div>
    )
  }
}

export default App;
