import React from 'react';
import ReactDOM from 'react-dom';

import makeRoutes from './routes.js';
import {browserHistory} from 'react-router';

import App from './containers/App.js';

import './index.css';

const app = document.createElement('div');
document.body.appendChild(app);

const routes = makeRoutes();

ReactDOM.render(<App history={browserHistory} routes = {routes} />,app);
