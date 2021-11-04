import { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Error from './components/Error';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Results from './components/Results';
import { checkValid } from './utils/util';

class Calculator extends Component {
  state = {
    firstNum: { input: 0, isValid: true },
    secondNum: { input: 0, isValid: true },
  };

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    const validation = +value ? true : false;

    if (!value) this.setState({ [name]: { input: 0, isValid: true } });

    if (validation)
      this.setState({ [name]: { input: +value, isValid: validation } });
    else this.setState({ [name]: { input: 0, isValid: validation } });
  };

  checkValidtion = () => {
    const { firstNum, secondNum } = this.state;
    return checkValid([firstNum, secondNum]);
  };

  displayResults = () => {
    return Object.entries(this.state).map(([key, value]) => (
      <p key={key}>{value.input}</p>
    ));
  };

  render() {
    return (
      <div className='container'>
        <Header />
        <main>
          <Card>
            <Form changeHandler={this.changeHandler}>
              {!this.checkValidtion() && <Error />}
            </Form>
            <Results />
          </Card>
        </main>
        <Footer author='Jinok' />
      </div>
    );
  }
}

export default Calculator;
