import React, { Component } from 'react';
import './App.css';
import General from './general';
import Education from './education';
import Experience from './experience';

class App extends Component{
  constructor(props){
    super(props)
  }

  submitInfo(e){
    e.preventDefault();
    let general = document.querySelectorAll('.general-info');
    for(var i = 0; i < general.length; i++){
      general[i].setAttribute('readonly', true);
      general[i].classList.add("submitted");
      e.target.style="display:none;"
    }
  }

  render(){
    return(
      <div className='cv-container'>
        <General/>
        <hr/>
        <h1>Education</h1>
        <Education/>
        <hr/>
        <h1>Experience</h1>
        <Experience/>
      </div>
      
  )}


}



export default App;
