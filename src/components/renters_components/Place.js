import React, { Component } from "react";
import { Input, Container } from 'semantic-ui-react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'
// import L from 'leaflet';
//
// delete L.Icon.Default.prototype._getIconUrl;
//
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

type Position = { lat: number, lng: number }

type State = {
  center: Position,
  marker: Position,
  zoom: number,
  draggable: boolean,
}

class Place extends Component{
  constructor(props){
    super(props)
    this.state = {
      center: {
        lat: 40.70,
        lng:-73.99,
      },
      marker: {
        lat: 40.70,
        lng: -73.99,
      },
      zoom: 13,
      draggable: true,
    }
  }

  render(){
    const position = [40.70, -73.99];
    const divMapStyle = {
      height: '300px',
      width: '300px'
    };
    return (
      <Container>
        <h1>Place</h1>
        <p>Where is the place you are renting the item at?</p>
        <Input focus disabled placeholder='Not yet implemented' onChange={(res) => {this.props.changePlace(res)}}/>
        <Map center={position} zoom={15} style={divMapStyle}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>WeWorks Access Labs<br /> This is where you are</Popup>
          </Marker>
        </Map>
      </Container>
    )
  }
}

export default Place
