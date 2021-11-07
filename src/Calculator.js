import { Component } from 'react';
import Error from './components/Error/Error';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Result from './components/Result/Result';
import Select from './components/Select/Select';
import { checkValid, checkIsNaN, checkIsNull, calculate } from './utils/util';

class Calculator extends Component {
  state = {
    firstNum: { input: null, isValid: true },
    secondNum: { input: null, isValid: true },
    operator: null,
  };

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();

    // When operator is selected.
    if (name === 'operator') {
      this.setState({ operator: value });
      return;
    }
    // When the input is an empty string
    if (value.length === 0) {
      this.setState({ [name]: { input: null, isValid: true } });
      return;
    }
    // When the input is 0
    if (value === '0') {
      this.setState({ [name]: { input: +value, isValid: true } });
      return;
    }
    // When the input is not the empty string and 0
    if (value.length !== 0 && value !== '0') {
      const validation = +value ? true : false;
      this.setState({ [name]: { input: +value, isValid: validation } });
      return;
    }
  };

  // Check validation
  checkValidation = () => {
    const { firstNum, secondNum } = this.state;
    return checkValid([firstNum, secondNum]);
  };

  // Display result
  displayResults = () => {
    const num1 = this.state.firstNum.input;
    const num2 = this.state.secondNum.input;
    const operator = this.state.operator;

    if (
      checkIsNull([num1, num2]) &&
      checkIsNaN([num1, num2]) &&
      operator !== null
    ) {
      return <p>{calculate(num1, num2, operator)}</p>;
    } else return <p>PLEASE, ENTER SOMETHING TO BEGIN.</p>;
  };

  render() {
    const first = this.state.firstNum.isValid;
    const second = this.state.secondNum.isValid;

    return (
      <div className='container'>
        <Header />
        <main>
          <Card>
            <Form changeHandler={this.changeHandler} inputs={[first, second]}>
              <Select changeHandler={this.changeHandler} />
              {!this.checkValidation() && <Error />}
            </Form>
            <Result results={this.displayResults} />
          </Card>
        </main>
        <Footer author='Jinok' />
      </div>
    );
  }
}

export default Calculator;
