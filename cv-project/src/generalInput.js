import React, { Component } from 'react';
import './App.css';


class GeneralInput extends Component{
    constructor(props){
        super(props)
    }

    

    render(){
        return(
        <div id="general-input">
        <form action="general-info" id='general'>
          
          <input type="text" placeholder="Name" className="general-info" value={this.props.nameValue} onChange={this.props.nameChange}/>
          
          <input type="text" placeholder="Title" className="general-info" value={this.props.titleValue} onChange={this.props.titleChange}/>
          
          <input type="tel" placeholder="Phone Number" className="general-info" value={this.props.numberValue} onChange={this.props.numberChange}/>
          
          <input type="email" placeholder="Email" className="general-info" value={this.props.emailValue} onChange={this.props.emailChange}/>
          <button id='add-general-info' onClick={this.props.submitInfo}>Submit</button>
          
        </form>
      </div>
      )}
}

export default GeneralInput;