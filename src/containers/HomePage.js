import React, { Component } from 'react';
import UserCollection from './UserCollection';
import ItemCollection from './ItemCollection';
import CheckoutPage from './CheckoutPage'
import NavBar from './NavBar';

import { Button, Icon, Container } from 'semantic-ui-react'


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      items:[],
      users_items:[],
      checkout:false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/items').then(res => res.json()).then(res => {
      this.setState({
        items:res
      })
    })
  }

  componentDidUpdate(){
    fetch('http://localhost:3000/items').then(res => res.json()).then(res => {
      this.setState({
        items:res
      })
    })
  }

  rentItems = () => {
    console.log(this.state)
    this.state.users_items.forEach((item) =>{
      fetch(`http://localhost:3000/items/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "renter_id": this.props.user.id,
        }),
      }).then(res => res.json()).then(console.log)
    })
    this.props.history.push('/Renter')
  }

  addUserItem = (item) =>{
    let found = this.state.users_items.find((a) => {
      return a.id == item.id
    })
    if(found == null){
      const newItemArray = [...this.state.users_items,item]
      this.setState({
        users_items:newItemArray
      })
    }
  }

  removeUserItem = (item) =>{
    const newItemArray = this.state.users_items.filter((e) => {
      return e != item
    })
    this.setState({
      users_items:newItemArray
    })
  }

  handleToggle = () =>{
    this.setState({
      checkout:!this.state.checkout
    })
  }

  render(){
    console.log(this.state.items)
    return (
      <Container>
        {this.state.checkout ?
          <div>
            <h1>Checkout Page </h1>
            <CheckoutPage items={this.state.users_items} button_name="Remove" removeUserItem={this.removeUserItem} user={this.props.user} handleToggle={this.handleToggle} rentItems={this.rentItems}/>
          </div>
          :
          <div>
            <h1>Home Page </h1>
            {this.props.user ?
              <Button animated='vertical' floated='right' items={this.stateusers_items} onClick={this.handleToggle}>
              <Button.Content hidden>CheckOut?</Button.Content>
              <Button.Content visible>
              <Icon name='shop' />
              </Button.Content>
              </Button>
              :
              ""
            }
            <UserCollection items={this.state.users_items} button_name="Remove" removeUserItem={this.removeUserItem} user={this.props.user}/>

            <ItemCollection items={this.state.items} button_name="Rent" addUserItem={this.addUserItem} user={this.props.user}/>
          </div>
        }
      </Container>
    )
  }
}

export default HomePage
