import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        Made with &#10084; In Melbourne, Australia • Coded by{' '}
        {this.props.author}
      </footer>
    );
  }
}

export default Footer;
