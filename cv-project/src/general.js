import React, { Component } from 'react';
import './App.css';
import GeneralInput from './generalInput';
import DisplayGeneral from './displayGeneral';


class General extends Component{
    constructor(props){
        super(props);

        this.state = {
          value: {
            name: '',
            title: '',
            number: '',
            email: ''
            
          },
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(e)  {
      this.setState({
        value: {
          name: e.target.value,
          title: this.state.value.title,
          number: this.state.value.number,
          email: this.state.value.email,
        },
      });
    };
    handleTitleChange(e)  {
      this.setState({
        value: {
          name: this.state.value.name,
          title: e.target.value,
          number: this.state.value.number,
          email: this.state.value.email,
        },
      });
    };
    handleNumberChange(e)  {
      this.setState({
        value: {
          name: this.state.value.name,
          title: this.state.value.title,
          number: e.target.value,
          email: this.state.value.email,
        },
      });
    };
    handleEmailChange(e)  {
      this.setState({
        value: {
          name: this.state.value.name,
          title: this.state.value.title,
          number: this.state.value.number,
          email: e.target.value,

        },
      });
    };


    handleSubmit (e) {
      e.preventDefault();
      console.log(this.state.value)
      let display = document.querySelector('#general-display');
      let input = document.querySelector('#general-input');
      display.style = 'display:block';
      input.style = 'display:none';
    };
    handleEdit (e) {
      e.preventDefault();
      let display = document.querySelector('#general-display');
      let input = document.querySelector('#general-input');
      display.style = 'display:none';
      input.style = 'display:block';
    };

    

    render(){
        return(
        <div className="general">
          <GeneralInput
            nameValue={this.state.value.name}
            titleValue={this.state.value.title}
            numberValue={this.state.value.number}
            emailValue={this.state.value.email}

            nameChange={this.handleNameChange}
            titleChange={this.handleTitleChange}
            numberChange={this.handleNumberChange}
            emailChange={this.handleEmailChange}

            submitInfo = {this.handleSubmit}
            
          />
          <DisplayGeneral
          name={this.state.value.name}
          title={this.state.value.title}
          number={this.state.value.number}
          email={this.state.value.email}
          editInfo = {this.handleEdit}
          />
        </div>
      )}
}

export default General;