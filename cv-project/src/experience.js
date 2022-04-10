import React, { Component } from 'react';
import './App.css';
import ExperienceInput from './experienceInput';
import DisplayExperience from './displayExperience';



class Experience extends Component{
    constructor(props){
        super(props);

        this.state = {
          value: {
            name: '',
            title: '',
            start: '',
            end: '',
            desc: ''
            
          },
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleNameChange(e)  {
      this.setState({
        value: {
          name: e.target.value,
          title: this.state.value.title,
          start: this.state.value.start,
          end: this.state.value.end,
          desc: this.state.value.desc
        },
      });
    };
    handleTitleChange(e)  {
      this.setState({
        value: {
          name: this.state.value.name,
          title: e.target.value,
          start: this.state.value.start,
          end: this.state.value.end,
          desc: this.state.value.desc
        },
      });
    };
    handleStartChange(e)  {
      this.setState({
        value: {
          name: this.state.value.name,
          title: this.state.value.title,
          start: e.target.value,
          end: this.state.value.end,
          desc: this.state.value.desc
        },
      });
    };
    handleEndChange(e)  {
      this.setState({
        value: {
          name: this.state.value.name,
          title: this.state.value.title,
          start: this.state.value.start,
          end: e.target.value,
          desc: this.state.value.desc

        },
      });
    };
    handleDescChange(e)  {
      this.setState({
        value: {
          name: this.state.value.name,
          title: this.state.value.title,
          start: this.state.value.start,
          end: this.state.value.end,
          desc: e.target.value

        },
      });
    };

    handleSubmit (e) {
      e.preventDefault();
      console.log(this.state.value)
      let display = document.querySelector('#experience-display');
      let input = document.querySelector('#experience-input');
      display.style = 'display:block';
      input.style = 'display:none';
    };
    handleEdit (e) {
      e.preventDefault();
      let display = document.querySelector('#experience-display');
      let input = document.querySelector('#experience-input');
      display.style = 'display:none';
      input.style = 'display:block';
    };

    render(){
        return(
            <div className='experience'>
              <ExperienceInput
                nameValue={this.state.value.name}
                titleValue={this.state.value.title}
                startValue={this.state.value.start}
                endValue={this.state.value.end}
                descValue={this.state.value.desc}
    
                nameChange={this.handleNameChange}
                titleChange={this.handleTitleChange}
                startChange={this.handleStartChange}
                endChange={this.handleEndChange}
                descChange={this.handleDescChange}
    
                submitInfo = {this.handleSubmit}
              
              />
              <DisplayExperience
                name={this.state.value.name}
                title={this.state.value.title}
                start={this.state.value.start}
                end={this.state.value.end}
                desc={this.state.value.desc}
                editInfo = {this.handleEdit}
              />
            </div>
        )
    }
}

export default Experience;