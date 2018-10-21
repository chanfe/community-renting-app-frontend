import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './containers/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './containers/NavBar';
import List from './containers/HostListPage';
import Host from './containers/HostPage';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <NavBar>
              <Switch>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/List" component={List} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/Host" component={Host} />
                <Route exact path="/" component={Home} />
              </Switch>
            </NavBar>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
