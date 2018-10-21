import React, { Component } from 'react';
import Title from '../components/renters_components/Title';
import Photo from '../components/renters_components/Photo';
import Description from '../components/renters_components/Description';
import Pricings from '../components/renters_components/Pricings';
import Place from '../components/renters_components/Place';

import { Button } from 'semantic-ui-react'



class HostListPage extends Component {
  constructor() {
    super()
    this.state ={
      title:"",
      photo:"",
      description:"",
      price:0,
      place:"",
    }
  }

  changeTitle = (title) =>{
    this.setState({
      title:title.target.value
    })
  }

  onDrop = (file) =>{
    this.setState({
      photo:file
    })
  }

  changeDescription = (description) =>{
    this.setState({
      description:description.target.value
    })
  }

  changePrice = (price) =>{
    this.setState({
      price:price.target.value
    })
  }

  changePlace = (place) =>{
    this.setState({
      place:place.target.value
    })
  }

  handleFetch = () =>{
    console.log(this.state)
    fetch(`http://localhost:3000/items`, {
      method: "POST",
      headers: {
            "Content-Type": "application/json",
        },
      body: JSON.stringify({
        "host_id": 1,
        "name":this.state.title,
        "image_url":this.state.photo[0],
        "discription":this.state.description,
        "cost":this.state.price
      }),
    }).then(res => res.json())
  }

  render(){
    return (
      <div>
        <Title changeTitle={this.changeTitle}/>
        <Photo onDrop={this.onDrop}/>
        <Description changeDescription={this.changeDescription}/>
        <Pricings changePrice={this.changePrice}/>
        <Place changePlace={this.changePlace}/>
        <Button primary onClick={this.handleFetch}>List it</Button>
      </div>
    )
  }
}

export default HostListPage
