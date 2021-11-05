import React, { Component } from 'react';
import styles from './Form.module.css';

export class Form extends Component {
  inputHandler = (event) => {
    this.props.changeHandler(event);
  };

  render() {
    const [first, second] = this.props.inputs;

    return (
      <div className={styles.form}>
        <label htmlFor='first'>FIRST NUMBER</label>
        <input
          type='text'
          name='firstNum'
          onChange={this.inputHandler}
          className={`${!first ? styles.warning : ''}`}
        />
        <label htmlFor='second'>SECOND NUMBER</label>
        <input
          type='text'
          name='secondNum'
          onChange={this.inputHandler}
          className={`${!second ? styles.warning : ''}`}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Form;
