import { Route, Switch } from 'react-router-dom';
import React from 'react';

import FoodTypeListContainer from '../containers/FoodTypeListContainer';
import LocationFinderContainer from '../containers/LocationFinderContainer';
import LoginContainer from '../containers/forms/LoginContainer';
import NavbarContainer from '../containers/NavbarContainer';
import ResultListContainer from '../containers/ResultListContainer';
import SettingsContainer from '../containers/private/SettingsContainer';
import SignupContainer from '../containers/forms/SignupContainer';
import UnAuthorizedContainer from '../containers/errors/UnAuthorizedContainer';
import AlreadySignedup from '../components/errors/AlreadySignedup';

const App = () => (
  <div>
    <NavbarContainer />
    <main>
      <Switch>
        <Route exact path='/' component={LocationFinderContainer} />
        <Route path='/foodTypes' component={FoodTypeListContainer} />
        <Route path='/results' component={ResultListContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/settings' component={SettingsContainer} />
        <Route path='/unauthorized' component={UnAuthorizedContainer} />
        <Route path='/already' component={AlreadySignedup} />
      </Switch>
    </main>
  </div>
)

export default App;
