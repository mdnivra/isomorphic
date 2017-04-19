import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import {
    App,
    Home,
    NotFound,
  } from './containers';

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
