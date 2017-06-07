import { Route, Switch } from 'react-router-dom';
import React from 'react';

import FoodTypeList from './FoodTypeList';
import LocationFinder from './LocationFinder';

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LocationFinder} />
      <Route path='/foodTypes' component={FoodTypeList} />
    </Switch>
  </main>
)

export default App;
