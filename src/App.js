import React, { Component } from 'react';
import Calculator from './components/Calculator'
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
