import React from "react";
import { Input } from 'semantic-ui-react';

const Title = props => {
  const { item, changeTitle } = props;

  return (
    <div>
      <h1>Title</h1>
      <p>Use words people would search for when looking for your item.</p>
      <Input focus placeholder='Item Name Title...' onChange={(res) => {changeTitle(res)}}/>
    </div>
  )
}

export default Title
