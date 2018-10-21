import React, { Component } from 'react';
import ItemCollection from './ItemCollection'

class HostPage extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/hosts/1').then(res => res.json()).then(res => {
      this.setState({
        items:res.items
      })
    })
  }


  render(){
    return (
      <div>
        <h1>Host Page </h1>
        <ItemCollection items={this.state.items} button_name="Edit"/>
      </div>
    )
  }
}

export default HostPage
