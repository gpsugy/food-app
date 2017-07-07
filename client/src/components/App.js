import { Route, Switch } from 'react-router-dom';
import React from 'react';

import FoodTypeListContainer from '../containers/FoodTypeListContainer';
import LocationFinderContainer from '../containers/LocationFinderContainer';
import Login from './forms/Login';
import ResultListContainer from '../containers/ResultListContainer';
import SignupContainer from '../containers/forms/SignupContainer';

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LocationFinderContainer} />
      <Route path='/foodTypes' component={FoodTypeListContainer} />
      <Route path='/results' component={ResultListContainer} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignupContainer} />
    </Switch>
  </main>
)

export default App;
