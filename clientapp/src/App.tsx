import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { Main } from './views/main';
import { LoginPage } from './views/LoginPage';
import { LogoutComponent } from './components/LogoutComponent';
import ProtectedRoute from './guard/GuardedRoute';
import { ValidationService } from './services/ValidationService';
import { CreateTest } from './views/CreateTest';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <LoginPage></LoginPage>
          </Route>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route exact path="/logout" component={LogoutComponent}>
          </Route>
          {/* <Route exact path="/profile">
            <Redirect to="/"></Redirect>
          </Route> */}
          <ProtectedRoute path="/create-test" isAuthenticated={ValidationService.isLoggedIn()} component={CreateTest}/>
          {/* Default route */}
          <Route><Redirect to="/"></Redirect></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
