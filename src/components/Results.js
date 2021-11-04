import React, { Component } from 'react';

export class Results extends Component {
  render() {
    return <div className='results'>{this.props.results()}</div>;
  }
}

export default Results;
