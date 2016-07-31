import React from 'react';
import { Route, Redirect } from 'react-router';

import Home from './Home/home.js';
import About from './About/about.js';


export const makeMainRoutes = () => {
  return (
    <Route>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Route>
      );
}

export default makeMainRoutes;
