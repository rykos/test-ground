import React, { Component } from 'react';
import './App.css';
import { TestTab } from './components/test-tab';
import { TestCase } from './models/TestCase';
import { TestCaseResult } from './models/TestResult';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './views/main';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Main></Main>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
