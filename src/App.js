import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <Router>
        <div className="AppContainer">
          <Route
            exact
            path="/"
            render={props => (
              <>
                {!this.state.isSubmitted && (
                  <Welcome handleSubmit={this.handleSubmit} />
                )}
                {this.state.isSubmitted && (
                  <MapContainer handleClick={this.handleClick} />
                )}
              </>
            )}
          />
        </div>
      </Router>
    );
  }
}
