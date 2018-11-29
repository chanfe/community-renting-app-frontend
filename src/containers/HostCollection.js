import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';
import ItemSpec from '../components/ItemSpec';
import { Segment } from 'semantic-ui-react';
const URL = 'https://community-renting-api.herokuapp.com';


class HostCollection extends Component {
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
    fetch(`${URL}/items/${item.id}`,{
      method: "DELETE",
      headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
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
      <Segment>
        {this.state.itempage == null ?
          <div className="ui four column grid">
        		<div className="row">
        		  {itemCards}
        		</div>
      	  </div>
         :
         <ItemSpec item={this.state.itempage} handleCardClick={this.handleCardClick} removeCardClick={this.removeCardClick} buttonName="remove"/>
        }
      </Segment>
    )
  }
}

export default HostCollection
