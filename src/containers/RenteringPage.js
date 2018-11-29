import React, { Component } from 'react';
import RentersCollection from './RentersCollection';
import { Container, Segment } from 'semantic-ui-react';
const URL = 'https://community-renting-api.herokuapp.com';

class RenteringPage extends Component {
  constructor() {
    super();
    this.state = {
      items:[]
    }
  }

  componentDidMount(){
    if (this.props.user){
      fetch(`${URL}/renters/${this.props.user.id}`).then(res => res.json()).then(res => {
        this.setState({
          items:res.items
        })
      })
    }
    else{
      this.props.history.push('/SignUp')
    }
  }

  componentDidUpdate(){
    if (this.props.user){
      fetch(`${URL}/renters/${this.props.user.id}`).then(res => res.json()).then(res => {
        this.setState({
          items:res.items
        })
      })
    }
    else{
      this.props.history.push('/SignUp')
    }
  }

  changeItems = (items) =>{
    this.setState({
      items:items
    })
  }

  getItems = () =>{
    return this.state.items
  }

  render(){
    return (
      <Container>
        <Segment>
          <h1> Item(s) you are renting out for use </h1>
          <RentersCollection items={this.state.items} button_name="Edit" changeItems={this.changeItems} getItems={this.getItems}/>
        </Segment>
      </Container>
    )
  }
}

export default RenteringPage
