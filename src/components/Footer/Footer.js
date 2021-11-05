import React, { Component } from 'react';
import './Footer.module.css';

export class Footer extends Component {
  render() {
    return (
      <footer>
        Made with &#10084; In Melbourne, Australia &#183; Coded by{' '}
        {this.props.author}
      </footer>
    );
  }
}

export default Footer;
