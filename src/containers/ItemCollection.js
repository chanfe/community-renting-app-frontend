import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';

class ItemCollection extends Component {
  constructor() {
    super();
  }

  handleCardClick = (item) => {
    this.props.addUserItem(item)
  }

  render(){
    const itemCards = this.props.items.map((item) => (< ItemCard key={item.id} item={item} button_name={this.props.button_name} handleCardClick={this.handleCardClick}/>))
    return (
      <div className="ui four column grid">
    		<div className="row">
    		  {itemCards}
    		</div>
  	  </div>
    )
  }
}

export default ItemCollection
