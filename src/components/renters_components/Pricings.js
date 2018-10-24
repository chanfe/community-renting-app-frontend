import React from "react";
import { Input } from 'semantic-ui-react';
import { Icon, Label } from 'semantic-ui-react'

const Pricings = props => {
  const { item, changePrice } = props;

  return (
    <div>
      <h1>Pricings</h1>
      <p>What is the price</p>
      <Input labelPosition='right' type='text' placeholder='Amount' onChange={(res) => {changePrice(res)}}>
        <Label basic>$</Label>
        <input />
        <Label>.00 per day</Label>
      </Input>

    </div>
  )
}

export default Pricings
