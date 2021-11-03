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


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navigation></Navigation>
        <div className="h-full flex justify-start">
          <div className="h-full w-48 bg-blue-100 border-r border-gray-400 text-center">
            <div className="border-b border-gray-400 p-1 cursor-pointer hover:bg-yellow-100">Item 1</div>
            <div className="border-b border-gray-400 p-1 cursor-pointer hover:bg-yellow-100">Item 2</div>
          </div>
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