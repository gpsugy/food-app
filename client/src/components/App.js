import { Route, Switch } from 'react-router-dom';
import React from 'react';

import FoodTypeListContainer from '../containers/FoodTypeListContainer';
import LocationFinderContainer from '../containers/LocationFinderContainer';
import LoginContainer from '../containers/forms/LoginContainer';
import ResultListContainer from '../containers/ResultListContainer';
import SettingsContainer from '../containers/private/SettingsContainer';
import SignupContainer from '../containers/forms/SignupContainer';

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LocationFinderContainer} />
      <Route path='/foodTypes' component={FoodTypeListContainer} />
      <Route path='/results' component={ResultListContainer} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      <Route path='/settings' component={SettingsContainer} />
    </Switch>
  </main>
)
      // <PrivateRoute path="/settings" component={Settings} />

export default App;
