import React, { Component } from "react";

export class List extends Component {
  async getData() {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_API_KEY
      }&libraries=places`
    );
    console.log(await res.json());
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return <div />;
  }
}

export default List;
