import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from "./components/Header";
import Welcome from "./components/Welcome";
// import List from "./components/List";
import MapContainer from "./components/MapContainer";
// import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <Welcome />} />
        <Route path="/results" render={props => <MapContainer />} />
      </div>
    </Router>
  );
}

export default App;
