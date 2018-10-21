import React from "react";
import { Input } from 'semantic-ui-react';
import ReactDropzone from 'react-dropzone';

const Photo = props => {
  const { item, onDrop } = props;

  return (
    <div>
      <h1>Add a photo</h1>
      <p>Improve your buyer’s confidence by including a Photo</p>
      <ReactDropzone
          onDrop={(res) => {onDrop(res)}}
        >
          Drop your best Photo here!!
        </ReactDropzone>
    </div>
  )
}

export default Photo
