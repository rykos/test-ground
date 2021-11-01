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


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/' component={Main} />
          <Route exact path="/logout" component={LogoutComponent} />
          <ProtectedRoute path="/create-test" isAuthenticated={ValidationService.isLoggedIn()} component={CreateTest} />
          <ProtectedRoute path="/results" isAuthenticated={ValidationService.isLoggedIn()} component={ResultsPage} />
          <ProtectedRoute path="/tests" isAuthenticated={ValidationService.isLoggedIn()} component={TestsPage} />
          {/* Default route */}
          <Route><Redirect to="/tests"></Redirect></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;