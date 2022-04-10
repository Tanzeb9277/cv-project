import React, { Component } from 'react';
import './App.css';


class DisplayGeneral extends Component{
    constructor(props){
        super(props)
    }

    

    render(){
        return(
        <div id="general-display">
            <h1>{this.props.name}</h1>
            <h2>{this.props.title}</h2>
            <h2>{this.props.number}</h2>
            <h2>{this.props.email}</h2>
            <button id='edit-general-info' className='edit-info' onClick={this.props.editInfo}>Edit</button>
        </div>
      )}
}

export default DisplayGeneral;