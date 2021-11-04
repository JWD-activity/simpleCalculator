import React, { Component } from 'react';

export class Form extends Component {
  inputHandler = (event) => {
    this.props.changeHandler(event);
  };

  render() {
    return (
      <div className='form'>
        <label htmlFor='first'>FIRST NUMBER</label>
        <input type='text' name='firstNum' onChange={this.inputHandler} />
        <label htmlFor='second'>SECOND NUMBER</label>
        <input type='text' name='secondNum' onChange={this.inputHandler} />
      </div>
    );
  }
}

export default Form;
