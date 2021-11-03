import { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Results from './components/Results';

class Calculator extends Component {
  state = {
    inputs: {
      numOne: 0,
      numTwo: 0,
    },
    results: {
      add: 0,
      subtract: 0,
      multiply: 0,
      divide: 0,
    },
  };

  render() {
    return (
      <div className='container'>
        <Header />
        <main>
          <Card>
            <Form />
            <Results />
          </Card>
        </main>
        <Footer author='Jinok' />
      </div>
    );
  }
}

export default Calculator;
