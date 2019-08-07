import React, { Component } from "react";
import Welcome from "./components/Welcome";
import MapContainer from "./components/MapContainer";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", isSubmitted: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: event.target.search.value,
      isSubmitted: true
    });
  }

  handleClick(event) {
    this.setState({
      isSubmitted: false
    });
  }

  render() {
    return (
      <div className="AppContainer">
        <>
          {!this.state.isSubmitted && (
            <Welcome handleSubmit={this.handleSubmit} />
          )}
          {this.state.isSubmitted && (
            <MapContainer handleClick={this.handleClick} />
          )}
        </>
      </div>
    );
  }
}
