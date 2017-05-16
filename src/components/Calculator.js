import React, { Component } from 'react';


class Calculator extends Component {
	constructor(props){
    super(props)

    this.state = {
         total: "",
         result: ""
    }
   }
    
   	 add(l,n){
        return l + n;
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
  			<h1>Add with React!</h1>
  			<div className="add">
    			<input id='boss' type="text" />
    			<input id='shauna' type="text" />
        		<span>{this.state.total}</span>
    			<button onClick={()=>{this.handleOnClick()}}>Submit</button>
      		 	</div>

        </div>
    	)
 
} 
}

export default Calculator;

