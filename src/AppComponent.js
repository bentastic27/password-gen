import React from 'react';
import Layout from './Layout';

class AppComponent extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Password Generator</h1>
        <pre>{this.props.password}</pre>
        <button onClick={this.props.generatePassword}>
          Generate Password
        </button>
      </Layout>
    );
  }
}

export default AppComponent;