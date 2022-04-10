import React, { Component } from 'react';
import './App.css';


class ExperienceInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div id='experience-input'>
        <form action="experience-info" id='experience-info'>
        <input type="text" placeholder='Company Name' className='experience-info' value={this.props.nameValue} onChange={this.props.nameChange}/>
        <input type="text" placeholder='Title' className='experience-info' value={this.props.titleValue} onChange={this.props.titleChange}/>
        
        <div class="dates">
        <label for="start">Start Date</label>
        <input type="date" className='experience-info' value={this.props.startValue} onChange={this.props.startChange}/>
        <label for="start">End Date</label>
        <input type="date" className='experience-info' value={this.props.endValue} onChange={this.props.endChange}/>
        </div>
        
        <textarea rows="4" cols="50" placeholder="Description..." className='experience-info' value={this.props.descValue} onChange={this.props.descChange}></textarea>

        <button id='add-experience-info' onClick={this.props.submitInfo}>Submit</button>
        
        
        
    </form>
    </div>)
    }
}

export default ExperienceInput;