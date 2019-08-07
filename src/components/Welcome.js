import React from "react";
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

export default class Welcome extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: "" };
  // }

  render() {
    return (
      <div style={flexStyle}>
        <h1>Welcome </h1>
        <p>
          Send your location to get a list of the worst restaurants in your
          area.
        </p>
        <SearchBar handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}
