import React from 'react';
import { Route, Redirect } from 'react-router';

import Home from './Home/home.js';


export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Home}>
    </Route>
  );
}

export default makeMainRoutes;
