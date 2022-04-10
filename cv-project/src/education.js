import React, { Component } from 'react';
import './App.css';
import EducationInput from './educationInput';
import DisplayEducation from './displayEducation';



class Education extends Component{
    constructor(props){
        super(props);

        this.state = {
          value: {
            name: '',
            study: '',
            start: '',
            end: '',
            desc: ''
            
          },
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStudyChange = this.handleStudyChange.bind(this);
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
          study: this.state.value.study,
          start: this.state.value.start,
          end: this.state.value.end,
          desc: this.state.value.desc
        },
      });
    };
    handleStudyChange(e)  {
      this.setState({
        value: {
          name: this.state.value.name,
          study: e.target.value,
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
          study: this.state.value.study,
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
          study: this.state.value.study,
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
          study: this.state.value.study,
          start: this.state.value.start,
          end: this.state.value.end,
          desc: e.target.value

        },
      });
    };

    handleSubmit (e) {
      e.preventDefault();
      console.log(this.state.value)
      let display = document.querySelector('#education-display');
      let input = document.querySelector('#education-input');
      display.style = 'display:block';
      input.style = 'display:none';
    };
    handleEdit (e) {
      e.preventDefault();
      let display = document.querySelector('#education-display');
      let input = document.querySelector('#education-input');
      display.style = 'display:none';
      input.style = 'display:block';
    };

    render(){
        return(
            <div className='experience'>
              
              <EducationInput
                nameValue={this.state.value.name}
                studyValue={this.state.value.study}
                startValue={this.state.value.start}
                endValue={this.state.value.end}
                descValue={this.state.value.desc}
    
                nameChange={this.handleNameChange}
                studyChange={this.handleStudyChange}
                startChange={this.handleStartChange}
                endChange={this.handleEndChange}
                descChange={this.handleDescChange}
    
                submitInfo = {this.handleSubmit}
              
              />
              <DisplayEducation
                name={this.state.value.name}
                study={this.state.value.study}
                start={this.state.value.start}
                end={this.state.value.end}
                desc={this.state.value.desc}
                editInfo = {this.handleEdit}
              />
            </div>
        )
    }
}

export default Education;