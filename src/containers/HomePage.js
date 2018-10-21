import React, { Component } from 'react';
import UserCollection from './UserCollection';
import ItemCollection from './ItemCollection';
import NavBar from './NavBar';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      items:[],
      users_items:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/items').then(res => res.json()).then(res => {
      this.setState({
        items:res
      })
    })
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

  render(){
    console.log(this.state.items)
    return (
      <div>
        <h1>Home Page </h1>
        <UserCollection items={this.state.users_items} button_name="Remove" removeUserItem={this.removeUserItem}/>
        <ItemCollection items={this.state.items} button_name="Rent" addUserItem={this.addUserItem}/>
      </div>
    )
  }
}

export default HomePage
