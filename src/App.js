import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from "./components/Header";
import Welcome from "./components/Welcome";
// import List from "./components/List";
import MapContainer from "./components/MapContainer";
import "./App.scss";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: event.target.search.value
    });
  }

  render() {
    return (
      <Router>
        <div className="AppContainer">
          <Route
            exact
            path="/"
            render={props => <Welcome handleSubmit={this.handleSubmit} />}
          />
          <Route exact path="/results" render={props => <MapContainer />} />
        </div>
      </Router>
    );
  }
}
