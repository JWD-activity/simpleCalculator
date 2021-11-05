import React, { Component } from 'react';
import styles from './Card.module.css';

export class Card extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles['card__body']}>{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
