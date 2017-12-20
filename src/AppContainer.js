import React from 'react';
import AppComponent from './AppComponent';
const generator = require('generate-password');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      config: {
        length: 10,
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: false,
        exclude: '',
        strict: false
      }
    };
    this.generatePassword = this.generatePassword.bind(this);
    this.generatePassword();
  }

  generatePassword = () => {
    const config = this.state.config;
    this.setState({
      password: generator.generate(config)
    });
  }

  render () {
    return (
      <AppComponent
        password={this.state.password}
        generatePassword={this.generatePassword}
      />
    );
  }
}

export default AppContainer;