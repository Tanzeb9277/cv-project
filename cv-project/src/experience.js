import React, { Component } from 'react';
import './App.css';



class Experience extends Component{
    constructor(props){
        super(props)
    }

    submitInfo(e){
        e.preventDefault();
        let general = document.querySelectorAll('.experience-info');
        let edit = document.querySelector('#edit-experience-info');
        for(var i = 0; i < general.length; i++){
          general[i].setAttribute('readonly', true);
          general[i].classList.add("submitted");
          e.target.style="display:none;";
          edit.style = "display:block;";
        }
      }
      editInfo(e){
        e.preventDefault();
        let general = document.querySelectorAll('.experience-info');
        let add = document.querySelector('#add-experience-info');
        for(var i = 0; i < general.length; i++){
          general[i].removeAttribute('readonly');
          general[i].classList.remove("submitted");
          e.target.style="display:none;";
          add.style = "display:block;";
        }
      }

    render(){
        return(
            <div className='experience'>
                <form action="education-info" id='experience-info'>
                <input type="text" placeholder='Company Name' className='experience-info'/>
                <input type="text" placeholder='Title' className='experience-info'/>
                
                <div class="dates">
                <label for="start">Start Date</label>
                <input type="date" className='experience-info'/>
                <label for="start">End Date</label>
                <input type="date" className='experience-info'/>
                </div>
                
                <textarea rows="4" cols="50" placeholder="Description..." className='experience-info'></textarea>

                <button id='add-experience-info' onClick={this.submitInfo}>Submit</button>
                <button id='edit-experience-info' className='edit-info'  onClick={this.editInfo}>Edit</button>
                
                
            </form>
            </div>
        )
    }
}

export default Experience;