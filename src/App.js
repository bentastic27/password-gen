import React from 'react';
import {FormControl, Checkbox} from 'react-bootstrap';
import Layout from './Layout';
const generator = require('generate-password');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: '',
      length: 20,
      numbers: true,
      symbols: true,
      uppercase: true,
      excludeSimilarCharacters: false,
      exclude: '',
      strict: false
    }
    this.generatePassword = this.generatePassword.bind(this);
    this.changeNumbers = this.changeNumbers.bind(this);
    this.changeSymbols = this.changeSymbols.bind(this);
    this.changeUppercase = this.changeUppercase.bind(this);
    this.changeExcludeSimilarCharacters = this.changeExcludeSimilarCharacters.bind(this);
    this.changeStrict = this.changeStrict.bind(this);
    this.changeLength = this.changeLength.bind(this);
    this.changeExclude = this.changeExclude.bind(this);
  }

  componentWillMount() {
    this.generatePassword();
  }

  changeNumbers = () => {
    this.setState({numbers: !this.state.numbers});
  }

  changeSymbols = () => {
    this.setState({symbols: !this.state.symbols});
  }

  changeUppercase = () => {
    this.setState({uppercase: !this.state.uppercase});
  }

  changeExcludeSimilarCharacters = () => {
    this.setState({excludeSimilarCharacters: !this.state.excludeSimilarCharacters});
  }

  changeStrict = () => {
    this.setState({strict: !this.state.strict});
  }

  changeLength = (e) => {
    this.setState({length: e.target.value});
  }

  changeExclude = (e) => {
    this.setState({exclude: e.target.value});
  }

  generatePassword = () => {
    this.setState({
      password: generator.generate({
        length: this.state.length,
        numbers: this.state.numbers,
        symbols: this.state.symbols,
        uppercase: this.state.uppercase,
        excludeSimilarCharacters: this.state.excludeSimilarCharacters,
        exclude: this.state.exclude,
        strict: this.state.strict,
      })
    });
  }

  render () {
    return (
      <Layout>
        <h1>Password Generator</h1>
        <pre>{this.state.password}</pre>
        <Checkbox
          checked={this.state.numbers}
          onChange={this.changeNumbers}
        >
          Numbers
        </Checkbox>
        <Checkbox
          checked={this.state.symbols}
          onChange={this.changeSymbols}
        >
          Symbols
        </Checkbox>
        <Checkbox
          checked={this.state.uppercase}
          onChange={this.changeUppercase}
        >
          Uppercase
        </Checkbox>
        <Checkbox
          checked={this.state.excludeSimilarCharacters}
          onChange={this.changeExcludeSimilarCharacters}
        >
          Exclude Similar
        </Checkbox>
        <Checkbox
          checked={this.state.strict}
          onChange={this.changeStrict}
        >
          Strict
        </Checkbox>
        <FormControl
          type="number"
          value={this.state.length}
          onChange={this.changeLength}
        />
        Length
        <br />
        <FormControl
          type="text"
          value={this.state.exclude}
          onChange={this.changeExclude}
        />
        Exclude
        <br /><br />
        <button type="button" className="btn btn-primary" onClick={this.generatePassword}>
          Generate Password
        </button>
      </Layout>
    );
  }
}

export default App;