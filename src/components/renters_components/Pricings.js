import React from "react";
import { Input } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'

const Pricings = props => {
  const { item, changePrice } = props;

  return (
    <div>
      <h1>Pricings</h1>
      <p>What is the price</p>
      <Icon name='dollar' />
      <Input focus placeholder='Price...' onChange={(res) => {changePrice(res)}}/>
    </div>
  )
}

export default Pricings
