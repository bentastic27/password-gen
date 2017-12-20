import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <h1>{this.props.password}</h1>
    );
  }
}

export default AppComponent;