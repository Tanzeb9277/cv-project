import React, { Component } from 'react';
import './App.css';


class General extends Component{
    constructor(props){
        super(props)
    }

    submitInfo(e){
        e.preventDefault();
        let general = document.querySelectorAll('.general-info');
        let edit = document.querySelector('#edit-general-info');
        for(var i = 0; i < general.length; i++){
          general[i].setAttribute('readonly', true);
          general[i].classList.add("submitted");
          e.target.style="display:none;";
          edit.style = "display:block;";
        }
      }
      editInfo(e){
        e.preventDefault();
        let general = document.querySelectorAll('.general-info');
        let add = document.querySelector('#add-general-info');
        for(var i = 0; i < general.length; i++){
          general[i].removeAttribute('readonly');
          general[i].classList.remove("submitted");
          e.target.style="display:none;";
          add.style = "display:block;";
        }
      }

    render(){
        return(
        <div className="general">
        <form action="general-info" id='general'>
          
          <input type="text" placeholder="Name" className="general-info"/>
          
          <input type="text" placeholder="Title" className="general-info"/>
          
          <input type="tel" placeholder="Phone Number" className="general-info"/>
          
          <input type="email" placeholder="Email" className="general-info"/>
          <button id='add-general-info' onClick={this.submitInfo}>Submit</button>
          <button id='edit-general-info' className='edit-info' onClick={this.editInfo}>Edit</button>
        </form>
      </div>
      )}
}

export default General;