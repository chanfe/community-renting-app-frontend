import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import HomePage from './HomePage'
import Login from '../components/Login'


class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      login: false
    }
  }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  handleLoginClick = () => this.setState({ login: !this.state.login })

  render() {
    const { children } = this.props
    const { visible } = this.state
    console.log(this.state.login)

    return (
      <div>
        {/*this will be the header*/}
        <Button onClick={this.handleButtonClick}><Icon name='sidebar' /></Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <NavLink to="/">
              <Menu.Item as='a'>
                <Icon name='home' />
                Home
              </Menu.Item>
            </NavLink>

            <NavLink to="/Host">
              <Menu.Item as='a'>
                <Icon name='user' />
                Host
              </Menu.Item>
            </NavLink>

            <Menu.Item as='a' onClick={this.handleLoginClick}>
              <Icon name='sign-in' />
              Login
            </Menu.Item>

            <NavLink to="/SignUp">
              <Menu.Item as='a'>
                <Icon name='signup' />
                SignUp
              </Menu.Item>
            </NavLink>

            <NavLink to="/List">
              <Menu.Item as='a'>
                <Icon name='list' />
                List Item
              </Menu.Item>
            </NavLink>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              {(this.state.login) ? <Login handleLoginClick={this.handleLoginClick}/> : ""}
            </Segment>
            { children }
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    )
  }
};

export default NavBar;
