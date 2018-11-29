import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';
import ItemSpec from '../components/ItemSpec';
const URL = 'https://community-renting-api.herokuapp.com'

class RentersCollection extends Component {
  constructor() {
    super();
    this.state = {
      itempage: null
    }
  }

  handleCardClick = (item) => {
    this.setState({
      itempage: item
    })
  }

  removeCardClick = (item) => {
    fetch(`${URL}/return/${item.id}`,{
      method: "PATCH",
      headers: {
            "Content-Type": "application/json",
        },
    }).then(res => res.json()).then(res => {
      const newArray = this.props.getItems().filter((a) => {
        return a.id != res.id
      })
      this.props.changeItems(newArray)
    })


    this.setState({
      itempage: null
    })
  }

  render(){
    const itemCards = this.props.items.map((item) => (< ItemCard key={item.id} item={item} button_name={this.props.button_name} handleCardClick={this.handleCardClick} />))
    return (
      (this.state.itempage == null) ?
        (<div className="ui four column grid">
      		<div className="row">
      		  {itemCards}
      		</div>
    	  </div>
      ) : (<ItemSpec item={this.state.itempage} handleCardClick={this.handleCardClick} removeCardClick={this.removeCardClick} buttonName="return item back"/>)
    )
  }
}

export default RentersCollection
