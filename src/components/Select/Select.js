import React, { Component } from 'react';
import './Select.module.css';

const operator = ['+', '-', '×', '÷', '^'];

export class Select extends Component {
  selectHandler = (event) => {
    this.props.changeHandler(event);
  };

  generateOptions = () => {
    return operator.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  render() {
    return (
      <>
        <label htmlFor='operator'>OPERATOR</label>
        <select
          name='operator'
          className='selection'
          onChange={this.selectHandler}
        >
          <option value=''>CHOOSE YOUR OPTION.</option>
          {this.generateOptions()}
        </select>
      </>
    );
  }
}

export default Select;
