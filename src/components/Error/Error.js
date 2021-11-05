import React, { Component } from 'react';
import styles from './Error.module.css';

export class Error extends Component {
  render() {
    return <p className={styles.error}>⛔️ PLEASE, ENTER A VALID NUMBER!</p>;
  }
}

export default Error;
