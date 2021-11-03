import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <div className='form'>
        <label htmlFor='first'>FIRST NUMBER</label>
        <input type='text' name='first' />
        <label htmlFor='second'>SECOND NUMBER</label>
        <input type='text' name='second' />
        <p className='error'>⛔️ Please, Enter a valid number!</p>
      </div>
    );
  }
}

export default Form;
