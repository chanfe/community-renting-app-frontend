import React, { Component } from 'react';
import CheckoutCard from '../components/CheckoutCard';

import { Container, Grid, Button, Icon, Segment } from 'semantic-ui-react'


class CheckoutPage extends Component {
  constructor() {
    super();
  }

  handleCardClick = (item) => {
    this.props.removeUserItem(item)
  }

  render(){
    const itemCards = this.props.items.map((item) => (<CheckoutCard key={item.id} item={item} button_name={this.props.button_name} handleCardClick={this.handleCardClick}/>))
    let totalCost = 0;
    this.props.items.forEach((item) => {
      totalCost += item.cost
    })
    return (
      <Container>
        <Grid.Column width={10}>
            {itemCards}
        </Grid.Column>
        <Segment>
          <Grid.Column width={6}>
            <Button animated='left' onClick={this.props.handleToggle}>
              <Button.Content visible>Back</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
            <Button animated='fade' floated='right' onClick={this.props.rentItems}>
              <Button.Content visible>${totalCost} per day?</Button.Content>
              <Button.Content hidden>RENT IT!</Button.Content>
            </Button>
          </Grid.Column>
        </Segment>
      </Container>
      
    )
  }
}

export default CheckoutPage
