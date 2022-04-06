import React, { Component } from 'react';
import './App.css';



class Education extends Component{
    constructor(props){
        super(props)
    }

    submitInfo(e){
        e.preventDefault();
        let general = document.querySelectorAll('.education-info');
        let edit = document.querySelector('#edit-education-info');
        for(var i = 0; i < general.length; i++){
          general[i].setAttribute('readonly', true);
          general[i].classList.add("submitted");
          e.target.style="display:none;";
          edit.style = "display:block;";
        }
      }
      editInfo(e){
        e.preventDefault();
        let general = document.querySelectorAll('.education-info');
        let add = document.querySelector('#add-education-info');
        for(var i = 0; i < general.length; i++){
          general[i].removeAttribute('readonly');
          general[i].classList.remove("submitted");
          e.target.style="display:none;";
          add.style = "display:block;";
        }
      }

    render(){
        return(
            <div className='education'>
                <form action="education-info" id='education-info'>
                <input type="text" placeholder='School Name' className='education-info'/>
                <input type="text" placeholder='Study' className='education-info'/>
                
                <div class="dates">
                <label for="start">Start Date</label>
                <input type="date" className='education-info'/>
                <label for="start">End Date</label>
                <input type="date" className='education-info'/>
                </div>
                
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Description..." className='education-info'></textarea>

                <button id='add-education-info' onClick={this.submitInfo}>Submit</button>
                <button id='edit-education-info' className='edit-info'  onClick={this.editInfo}>Edit</button>
                
                
            </form>
            </div>
        )
    }
}

export default Education;