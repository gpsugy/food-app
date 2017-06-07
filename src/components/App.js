import { Route, Switch } from 'react-router-dom';
import React from 'react';

import FoodTypeList from './FoodTypeList';
import LocationFinderContainer from '../containers/LocationFinderContainer';

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LocationFinderContainer} />
      <Route path='/foodTypes' component={FoodTypeList} />
    </Switch>
  </main>
)

export default App;
