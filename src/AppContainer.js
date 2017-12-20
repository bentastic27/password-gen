import React from 'react';
import AppComponent from './AppComponent';
const generator = require('generate-password');

class AppContainer extends React.Component {
  render () {
    return <AppComponent/>;
  }
}

export default AppContainer;