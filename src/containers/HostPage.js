import React, { Component } from 'react';
import HostCollection from './HostCollection'
import { Container } from 'semantic-ui-react';
const URL = 'https://community-renting-api.herokuapp.com';


class HostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    console.log("hostpage", this.props.user)
    if (this.props.user){
      fetch(`${URL}/hosts/${this.props.user.id}`).then(res => res.json()).then(res => {
        this.setState({
          items:res.items
        })
      })
    }
    else{
      this.props.history.push('/')
    }
  }

  componentDidUpdate(){
    if (this.props.user){
      fetch(`${URL}/hosts/${this.props.user.id}`).then(res => res.json()).then(res => {
        this.setState({
          items:res.items
        })
      })
    }
    else{
      this.props.history.push('/')
    }
  }

  getItems = () => {
    return this.state.items
  }

  changeItems = (items) =>{
    this.setState({
      items:items
    })
  }


  render(){
    return (
      <Container>
        <h1> Item(s) you are trying to rent out </h1>
        <HostCollection items={this.state.items} button_name="Edit" changeItems={this.changeItems} getItems={this.getItems}/>
      </Container>
    )
  }
}

export default HostPage
