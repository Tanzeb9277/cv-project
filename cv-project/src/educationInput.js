import React, { Component } from 'react';
import './App.css';


class EducationInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div id='education-input'>
        <form action="education-info" id='education-info'>
        <input type="text" placeholder='School Name' className='education-info' value={this.props.nameValue} onChange={this.props.nameChange}/>
        <input type="text" placeholder='Study' className='education-info' value={this.props.studyValue} onChange={this.props.studyChange}/>
        
        <div class="dates">
        <label for="start">Start Date</label>
        <input type="date" className='education-info' value={this.props.startValue} onChange={this.props.startChange}/>
        <label for="start">End Date</label>
        <input type="date" className='education-info' value={this.props.endValue} onChange={this.props.endChange}/>
        </div>
        
        <textarea rows="4" cols="50" placeholder="Description..." className='education-info' value={this.props.descValue} onChange={this.props.descChange}></textarea>

        <button id='add-education-info' onClick={this.props.submitInfo}>Submit</button>
        
        
        
    </form>
    </div>)
    }
}

export default EducationInput;