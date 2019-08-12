import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  fetchPlaces(mapProps, map) {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }

  render() {
    return (
      <>
        <a href="#" onClick={this.props.handleClick}>
          Back
        </a>
        <Map google={this.props.google} onReady={this.fetchPlaces} />
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);
