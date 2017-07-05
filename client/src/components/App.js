import { Route, Switch } from 'react-router-dom';
import React from 'react';

import FoodTypeListContainer from '../containers/FoodTypeListContainer';
import LocationFinderContainer from '../containers/LocationFinderContainer';
import ResultListContainer from '../containers/ResultListContainer';
import Signup from './forms/signup';

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LocationFinderContainer} />
      <Route path='/foodTypes' component={FoodTypeListContainer} />
      <Route path='/results' component={ResultListContainer} />
      <Route path='/signup' component={Signup} />
    </Switch>
  </main>
)

export default App;
