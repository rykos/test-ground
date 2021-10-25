import React, { Component } from 'react';
import './App.css';
import { TestTab } from './components/test-tab';
import { TestCase } from './models/TestCase';
import { TestCaseResult } from './models/TestResult';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { Main } from './views/main';
import { LoginPage } from './views/LoginPage';
import { ValidationService } from './services/ValidationService';
import { LogoutComponent } from './components/LogoutComponent';


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
          {/* Default route */}
          <Route><Redirect to="/"></Redirect></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
