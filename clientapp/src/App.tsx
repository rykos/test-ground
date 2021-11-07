import { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Main } from './views/main';
import { LoginPage } from './views/LoginPage';
import { LogoutComponent } from './components/LogoutComponent';
import ProtectedRoute from './guard/GuardedRoute';
import { ValidationService } from './services/ValidationService';
import { CreateTest } from './views/CreateTest';
import { Navigation } from './components/Navigation';
import { ResultsPage } from './views/ResultsPage';
import { TestsPage } from './views/TestsPage';
import { TestEdit } from './views/TestEdit';
import { NewScenarioPage } from './views/NewScenarioPage';
import { ScenarioEdit } from './views/ScenarioEdit';
import { HelperColumn } from './components/HelperColumn';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navigation></Navigation>
        <div className="h-full flex justify-start">
          <HelperColumn></HelperColumn>
          <div className="w-full">
            <Switch>
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/' component={Main} />
              <Route exact path="/logout" component={LogoutComponent} />
              <ProtectedRoute path="/create-scenario" isAuthenticated={ValidationService.isLoggedIn()} component={NewScenarioPage} />
              <ProtectedRoute path="/create-test" isAuthenticated={ValidationService.isLoggedIn()} component={CreateTest} />
              <ProtectedRoute path="/results" isAuthenticated={ValidationService.isLoggedIn()} component={ResultsPage} />
              <ProtectedRoute exact path="/tests" isAuthenticated={ValidationService.isLoggedIn()} component={TestsPage} />
              <ProtectedRoute path="/tests/:id" isAuthenticated={ValidationService.isLoggedIn()} component={TestEdit} />
              <ProtectedRoute path="/scenario/:id" isAuthenticated={ValidationService.isLoggedIn()} component={ScenarioEdit} />
              {/* Default route */}
              <Route><Redirect to="/tests"></Redirect></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
