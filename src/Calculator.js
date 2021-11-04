import { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Results from './components/Results';
import { checkValid } from './utils/util';

class Calculator extends Component {
  state = {
    firstNum: { input: 0, isValid: true },
    secondNum: { input: 0, isValid: true },
    isPassed: true,
  };

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const validation = +value ? true : false;

    if (validation)
      this.setState({ [name]: { input: +value, isValid: validation } });
    else this.setState({ [name]: { input: 0, isValid: validation } });

    if (!checkValid(this.state)) this.setState({ isPassed: false });
  };

  displayMessage = () => {
    return <p>Error</p>;
  };

  displayResults = () => {
    return Object.entries(this.state).map(([key, value]) => (
      <p key={key}>{value.input}</p>
    ));
  };

  disp;
  render() {
    console.log(this.state);
    return (
      <div className='container'>
        {!this.state.isPassed && <p>error</p>}
        <Header />
        <main>
          <Card>
            <Form changeHandler={this.changeHandler} />
            <Results />
          </Card>
        </main>
        <Footer author='Jinok' />
      </div>
    );
  }
}

export default Calculator;
