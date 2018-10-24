import React from "react";
import { Input } from 'semantic-ui-react';
import ReactDropzone from 'react-dropzone';

const Photo = props => {
  const { item, onDrop, changePhoto, photo} = props;

  return (
    <div>
      <h1>Add a photo</h1>
      <p>Improve your buyer’s confidence by including a Photo</p>
      <ReactDropzone
          onDrop={(res) => {onDrop(res)}}
        >
          Drop your best Photo here!!
        </ReactDropzone>
      <p>work in progress instead uplaod by sending a html below instead</p>
      <input value={photo} onChange={changePhoto} />
    </div>
  )
}

export default Photo
