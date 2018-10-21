import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const Login = (props) => {
  return (
    <Modal open onClick={props.handleLoginClick}>
      <Modal.Header>Login</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>ll</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default Login;
