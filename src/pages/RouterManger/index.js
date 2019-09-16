import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage';
import DashboardPage from '../DashboardPage';
import ViewPage from '../ViewPage';
import { AppContext } from '../../contexts/appContext';
import { PrivateRoute } from '../PrivateRoute';

const RouterManager = () => {

  const {store} = useContext(AppContext);

  return (
    <BrowserRouter>{console.log('pass here')}
      <Switch>
        <Route path='/login' render={() => 
          store.isAuthenticated 
          ? <DashboardPage />
          : <LoginPage />
        }/>
        <PrivateRoute path='/' component={DashboardPage}/>
        <PrivateRoute path='/dashboard' component={DashboardPage} />
        <PrivateRoute path='/view' component={ViewPage} />
      </Switch>      
    </BrowserRouter>
  );
}

export default RouterManager;