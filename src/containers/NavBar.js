import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import HomePage from './HomePage'
import Login from '../components/Login'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'


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
    const backgroundStyle = {
      backgroundColor: '#f5f5f5'
    };

    return (
      <div>
        {/*this will be the header*/}
        <Button onClick={this.handleButtonClick}><Icon name='sidebar' /></Button>

        <Sidebar.Pushable as={Segment} style={backgroundStyle}>
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

            {this.props.user ?
              <div>
                <NavLink to="/Host">
                  <Menu.Item as='a'>
                    <Icon name='user' />
                    Host
                  </Menu.Item>
                </NavLink>
                <NavLink to="/List">
                  <Menu.Item as='a'>
                    <Icon name='list' />
                    List Item
                  </Menu.Item>
                </NavLink>
                <NavLink to="/Renter">
                  <Menu.Item as='a'>
                    <Icon name='share alternate' />
                    Renting out
                  </Menu.Item>
                </NavLink>
                <Menu.Item as='a' onClick={this.props.handleLogout}>
                  <Icon name='logout' />
                  Log Out
                </Menu.Item>
              </div>
              :
              <div>
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
              </div>
            }


          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            {this.props.user ? <Welcome name={this.props.user}/> : ""}
            <Segment basic>
              {(this.state.login) ? <Login handleLoginClick={this.handleLoginClick} handleLogin={this.props.handleLogin}/> : ""}
            </Segment>
            { children }

            <Footer />

          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    )
  }
};

export default NavBar;
