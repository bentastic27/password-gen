import React from 'react';
import AppComponent from './AppComponent';
const generator = require('generate-password');

class AppContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: '',
      length: 10,
      numbers: true,
      symbols: true,
      uppercase: true,
      excludeSimilarCharacters: false,
      exclude: '',
      strict: false
    }
    this.generatePassword = this.generatePassword.bind(this);
  }

  componentWillMount() {
    this.generatePassword();
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
        strict: this.state.strict
      })
    });
  }

  render () {
    return (
      <AppComponent
        password={this.state.password}
        length={this.state.length}
        numbers={this.state.numbers}
        symbols={this.state.symbols}
        uppercase={this.state.uppercase}
        excludeSimilarCharacters={this.state.excludeSimilarCharacters}
        exclude={this.state.exclude}
        strict={this.state.strict}
        generatePassword={this.generatePassword}
      />
    );
  }
}

export default AppContainer;