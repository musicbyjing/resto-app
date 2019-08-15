import React, { Component } from "react";

export class PlacesListing extends Component {
  constructor(props) {
    super(props);
    this.state = { results: {} };
  }

  async componentDidMount() {
    try {
      const res = await `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${
        this.props.value
      }&inputtype=textquery&fields=name,formatted_address,rating&key=${
        process.env.REACT_APP_API_KEY
      }`;
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const json = await res.json();

      this.setState({
        results: json
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state.results);
    return (
      <>
        <a href="#" onClick={this.props.handleClick}>
          Back
        </a>
        <div>
          <ul />
        </div>
      </>
    );
  }
}

export default PlacesListing;
