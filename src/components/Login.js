import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Form, Checkbox, Message } from 'semantic-ui-react'
import history from '../history';

class Login extends Component {
  constructor(props){
    super(props)
    this.state ={
      error:null,
      username:"",
      password:""
    }
  }

  handleUsername = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) =>{
    this.setState({
      password: event.target.value
    })
  }

  handleLoginModal = () =>{
    console.log(this.state)
    this.login(this.state.username, this.state.password);
  }

  login = (username, password) =>{
    fetch('http://localhost:3000/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => res.json())
    .then(resp => {
        console.log("responce from login ",resp)
        if (resp.error) {
          this.setState({ error: resp.error });
        } else {
          this.props.handleLogin(resp);
          history.push("/Home");
          this.props.handleLoginClick();
        }
      });
  }


  render(){
    return (
      <Modal open >
        <Modal.Header>Login</Modal.Header>
        {this.state.error ? <Modal.Content> <Message color='red'>{this.state.error}</Message></Modal.Content> : ""}
        <Modal.Content>
          <Form>
            <Form.Field value={this.state.username} onChange={this.handleUsername}>
              <label>Username</label>
              <input placeholder='Username' />
            </Form.Field>
            <Form.Field type='password' value={this.state.password} onChange={this.handlePassword}>
              <label>Password</label>
              <input placeholder='Password' type='password'/>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.props.handleLoginClick}>
            <Icon name='remove' /> Exit
          </Button>
          <Button color='green' onClick={this.handleLoginModal}>
            <Icon name='checkmark' /> Login
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };
}

export default Login;
