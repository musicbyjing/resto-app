import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../App.scss";

const flexStyle = {
  margin: "auto",
  padding: "1em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "20vh",
  maxWidth: "30vw",
  backgroundColor: "#ECE5CE",
  boxShadow: "0.2em 0.2em #F1D4AF"
};

export default class Welcome extends Component {
  render() {
    return (
      <div style={flexStyle}>
        <h1 className="title">Welcome</h1>
        <p>
          Send your location to get a list of the worst restaurants in your
          area.
        </p>
        <SearchBar handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}
