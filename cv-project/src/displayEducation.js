import React, { Component } from 'react';
import './App.css';


class DisplayEducation extends Component{
    constructor(props){
        super(props)
    }

    

    render(){
        return(
        <div id="education-display">
            <h1>{this.props.name}</h1>
            <h2>{this.props.study}</h2>
            <h2>Start: {this.props.start}   End: {this.props.end} </h2>
            <p>{this.props.desc}</p>
            <button id='edit-education-info' className='edit-info' onClick={this.props.editInfo}>Edit</button>
        </div>
      )}
}

export default DisplayEducation;