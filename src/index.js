import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from './AppContainer';

ReactDOM.render(<AppContainer/>, document.getElementById('root'));
registerServiceWorker();
