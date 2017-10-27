// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import Routes from './routes';

import './index.css';

ReactDOM.render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
 	document.getElementById('root')
);
registerServiceWorker();