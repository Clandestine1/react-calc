import React, { Component } from 'react';
import {Bootstrap, MenuItem, DropdownButton, Row, Col, Button, Form, FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup} from 'react-bootstrap';


class Calculator extends Component {
	constructor(props){
    super(props)

    this.state = {
         total: "",
         result: "",
         tally: "",
         math: ""
       }
   }
    
   	 add(l,n){
        return l + n;
    }
    	 multiply(d,s){
        return d * s;
    }

    	 divide(k,h){
        return k / h;
    }

     sub(m,g){
        return m - g;
    }
    
    handleOnClick4(){
        let num1 = parseInt(document.querySelector('#boss').value, 10);
        let num2 = parseInt(document.querySelector('#shauna').value, 10);
        let math = this.sub(num1, num2);
        this.setState({
                math: math,
            })
    }
    
    handleOnClick3(){
        let num1 = parseInt(document.querySelector('#boss').value, 10);
        let num2 = parseInt(document.querySelector('#shauna').value, 10);
        let tally = this.divide(num1, num2);
        this.setState({
                tally: tally,
            })
    }
    
    handleOnClick1(){
        let num1 = parseInt(document.querySelector('#boss').value, 10);
        let num2 = parseInt(document.querySelector('#shauna').value, 10);
        let result = this.multiply(num1, num2);
        this.setState({
                result: result,
            })
    }

    
    handleOnClick(){
        let num1 = parseInt(document.querySelector('#boss').value, 10);
        let num2 = parseInt(document.querySelector('#shauna').value, 10);
        let total = this.add(num1, num2);
        this.setState({
                total: total,
            })
    }


  render() { 
    return (
	    <div className="container">
  			<div className="add">
    			<input placeholder="what is this" id='boss' type="text" />
    			<input placeholder="shameless" id='shauna' type="text" />			
    		 <div id="this">
    			<span id="math">{this.state.total}</span>
    			<span id="mathq">{this.state.math}</span>
				<span id="maths">{this.state.result}</span>
    			<span id="matha">{this.state.tally}</span>
    			
      		 	</div>
      		 </div>
    
    <FormGroup id="bs">
      <InputGroup> 
        <DropdownButton
          componentClass={InputGroup.Button}
          id="input-dropdown-addon"
          title="Choices"
        >
          <MenuItem key="1"><Button bsStyle="info" onClick={()=>{this.handleOnClick()}}>Add</Button></MenuItem>
          <MenuItem key="2"><Button bsStyle="info" onClick={()=>{this.handleOnClick4()}}>Subtract</Button></MenuItem>
          <MenuItem key="3"><Button bsStyle="info" onClick={()=>{this.handleOnClick1()}}>Multiply</Button></MenuItem>
          <MenuItem key="4"><Button bsStyle="info" onClick={()=>{this.handleOnClick3()}}>Divide</Button></MenuItem>
        </DropdownButton>
      </InputGroup>
    </FormGroup>


        </div>
    	)
 
} 
}

export default Calculator;

