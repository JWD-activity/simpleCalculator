import React, { Component } from 'react';

export class Card extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card__body'>{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
