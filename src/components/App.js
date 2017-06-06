import { Route, Switch } from 'react-router-dom';
import React from 'react';

import LocationFinder from './LocationFinder';

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LocationFinder} />
    </Switch>
  </main>
)

export default App;
