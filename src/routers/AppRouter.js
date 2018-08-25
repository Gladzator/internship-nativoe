import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import IntroPage from '../components/desktopView/IntroPage/IntroPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={IntroPage} exact={true}/>
        <Route  component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
