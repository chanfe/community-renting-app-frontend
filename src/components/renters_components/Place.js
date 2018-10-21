import React from "react";
import { Input } from 'semantic-ui-react';

const Place = props => {
  const { item, changePlace } = props;

  return (
    <div>
      <h1>Place</h1>
      <p>Where is the place you are renting the item at?</p>
      <Input focus placeholder='Item Place...' onChange={(res) => {changePlace(res)}}/>
    </div>
  )
}

export default Place
