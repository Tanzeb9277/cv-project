import React, { Component } from 'react';
import './App.css';


class DisplayExperience extends Component{
    constructor(props){
        super(props)
    }

    

    render(){
        return(
        <div id="experience-display">
            <h1>{this.props.name}</h1>
            <h2>{this.props.title}</h2>
            <h2>Start: {this.props.start}   End: {this.props.end} </h2>
            <p>{this.props.desc}</p>
            <button id='edit-general-info' className='edit-info' onClick={this.props.editInfo}>Edit</button>
        </div>
      )}
}

export default DisplayExperience;