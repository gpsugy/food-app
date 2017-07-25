import { Route, Switch } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
import React from 'react';

import AlreadySignedup from '../components/errors/AlreadySignedup';
import FoodTypeListContainer from '../containers/FoodTypeListContainer';
import LocationFinderContainer from '../containers/LocationFinderContainer';
import LoginContainer from '../containers/forms/LoginContainer';
import NavbarContainer from '../containers/NavbarContainer';
import ResultListContainer from '../containers/ResultListContainer';
import SettingsContainer from '../containers/private/SettingsContainer';
import SignupContainer from '../containers/forms/SignupContainer';
import UnAuthorizedContainer from '../containers/errors/UnAuthorizedContainer';

const App = () => (
  <div>
    <NavbarContainer />
    <div className="body-wrapper">
      <Route render={({ location, history, match }) => (
          <RouteTransition
            pathname={location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 1 }}
            atActive={{ opacity: 1 }}
          >
            <Switch key={location.key} location={location}>
              <Route exact path='/' component={LocationFinderContainer} />
              <Route path='/foodTypes' component={FoodTypeListContainer} />
              <Route path='/results' component={ResultListContainer} />
              <Route path='/login' component={LoginContainer} />
              <Route path='/signup' component={SignupContainer} />
              <Route path='/settings' component={SettingsContainer} />
              <Route path='/unauthorized' component={UnAuthorizedContainer} />
              <Route path='/already' component={AlreadySignedup} />
            </Switch>
          </RouteTransition>
        )}
    />
    </div>
  </div>
)

export default App;
