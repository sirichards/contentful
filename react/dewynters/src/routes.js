// src/routes.js
import React from 'react';
import { Route } from 'react-router-dom'

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

// import NotFound from './components/NotFound';

    //<Route path="/about" component={About} />
    //
const Routes = () => {
    return (
    	<div>
			<Route exact path="/" component={App} />
			<Route path="/about" component={About} />
			<Route path="*" component={NotFound} />
		</div>
    );
}

export default Routes;