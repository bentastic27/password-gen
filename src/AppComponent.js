import React from 'react';
import {Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import Layout from './Layout';

class AppComponent extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Password Generator</h1>
        <pre>{this.props.password}</pre>
        <Button bsStyle="primary" onClick={this.props.generatePassword}>
          Generate Password
        </Button>
      </Layout>
    );
  }
}

export default AppComponent;