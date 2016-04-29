require('bootstrap/dist/css/bootstrap.min.css');
require('../css/custom.css');
require('../css/fontello.css');

import React from 'react';
import { render } from 'react-dom';
import store from './state/store';
import App from './components/containers/App';

const change = () => render(<App data={store.getState()} />, document.getElementById('app'));

store.subscribe(change);

change();