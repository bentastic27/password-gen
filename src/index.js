import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';
import AppContainer from './AppContainer';

const app = (
  <ThemeProvider theme={theme}>
    <AppContainer />
  </ThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
