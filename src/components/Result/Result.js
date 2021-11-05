import React, { Component } from 'react';
import styles from './Result.module.css';

export class Result extends Component {
  render() {
    return <div className={styles.result}>{this.props.results()}</div>;
  }
}

export default Result;
