import { Route, Switch } from 'react-router-dom';
import React from 'react';

import FoodTypeList from './FoodTypeList';
import LocationFinderContainer from '../containers/LocationFinderContainer';
import ResultList from './ResultList';

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LocationFinderContainer} />
      <Route path='/foodTypes' component={FoodTypeList} />
      <Route path='/results' component={ResultList} />
    </Switch>
  </main>
)

export default App;
