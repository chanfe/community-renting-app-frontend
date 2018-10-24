import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';

class ItemCollection extends Component {
  constructor() {
    super();
  }

  handleCardClick = (item) => {
    if(this.props.user){
      this.props.addUserItem(item)
    }
    else {
      alert("need to login to rent")
    }
  }

  handleNullClick = (item) =>{
    alert("this item is already rented.")
  }

  render(){
    let itemCards = []
    if(this.props.user){
      const filterItem = this.props.items.filter((item) => {return item.host_id != this.props.user.id})
      itemCards = filterItem.map((item) => {
        if(item.renter_id){
          return <ItemCard key={item.id} item={item} button_name="Been rented" handleCardClick={this.handleNullClick}/>
        }
        else {
          return <ItemCard key={item.id} item={item} button_name={this.props.button_name} handleCardClick={this.handleCardClick}/>
        }
      })
    }
    else {
      itemCards = this.props.items.map((item) => (<ItemCard key={item.id} item={item} button_name={this.props.button_name} handleCardClick={this.handleCardClick}/>))
    }

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
