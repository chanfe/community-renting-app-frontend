import React from "react";
import { Form, TextArea } from 'semantic-ui-react'

const Description = props => {
  const { item, changeDescription } = props;

  return (
    <div>
      <h1>Description</h1>
      <p>Include any unique features or flaws.</p>
      <Form>
        <TextArea placeholder='Add a detailed description here.' onChange={(res) => {changeDescription(res)}}/>
      </Form>
    </div>
  )
}

export default Description
