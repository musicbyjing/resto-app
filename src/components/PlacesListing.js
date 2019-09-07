import React, { Component } from "react";

export class PlacesListing extends Component {
  constructor(props) {
    super(props);
    this.state = { results: {} };
  }

  async componentDidMount() {
    fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${this.props.value}&inputtype=textquery&fields=name,formatted_address,rating&key=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => res.json())
      .then(
        results => {
          this.setState({
            isLoaded: true,
            results: results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    // console.log(this.state.results);
    const { error, isLoaded, results } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div>
            <p>Here's a result we found for "{this.props.value}":</p>
            <p>{results}</p>
          </div>
          <div>
            <button onClick={this.props.handleClick}>Back</button>
          </div>
        </>
      );
    }
  }
}

export default PlacesListing;
