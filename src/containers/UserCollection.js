import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';


class UserCollection extends Component {
  constructor() {
    super();
  }

  handleCardClick = (item) => {
    this.props.removeUserItem(item)
  }

  render(){
    const itemCards = this.props.items.map((item) => (< ItemCard key={item.id} item={item} button_name={this.props.button_name} handleCardClick={this.handleCardClick}/>))
    return (
      <div className="ui segment inverted blue bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {itemCards}
          </div>
        </div>
      </div>
    )
  }
}

export default UserCollection
