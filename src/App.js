import React, { Component } from 'react';
import './App.css';
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
import Renter from './containers/RenteringPage';
import history from './history'

const URL = 'https://community-renting-api.herokuapp.com';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    if (token) {
      fetch(`${URL}/current_user`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token
        }
      })
        .then(resp => resp.json())
        .then(user => {
          this.setState({ user: user });
        });
    }
  }

  handleLogin = resp => {
    localStorage.setItem("jwt", resp.jwt);

    fetch(`${URL}/current_user`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: resp.jwt
      }
    })
      .then(resp => resp.json())
      .then(user => {
        this.setState({ user: user });
      });
  };

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({ user:null });
    console.log("Logouted");
  };

  onSignUp = (user) => {
    fetch(`${URL}/hosts/`, {
      method: "POST",
      headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
      body: JSON.stringify({
        "name":user.name,
        "username":user.username,
        "password":user.password,
      }),
    }).then(res => res.json()).then(console.log)
    fetch(`${URL}/renters/`, {
      method: "POST",
      headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
      body: JSON.stringify({
        "name":user.name,
        "username":user.username,
      }),
    }).then(res => res.json()).then(console.log)
  }

  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <NavBar handleLogin={this.handleLogin} handleLogout={this.handleLogout} user={this.state.user} handleLogout={this.handleLogout}>
              <Switch>
                <Route exact path="/List" render={(props) => <List user={this.state.user} history={props.history}/>} />
                <Route exact path="/SignUp" render={(props) => <SignUp {...props} handleUser={this.handleLogin} onSignUp={this.onSignUp} history={props.history}/>}/>
                <Route exact path="/Host" render={(props) => <Host user={this.state.user} history={props.history}/>}/>
                <Route exact path="/Renter" render={(props) => <Renter user={this.state.user} history={props.history}/>}/>
                <Route path="/" render={(props) => <Home user={this.state.user} history={props.history}/>} />
              </Switch>
            </NavBar>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
