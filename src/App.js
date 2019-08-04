import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from "./components/Header";
import Welcome from "./components/Welcome";
// import List from "./components/List";
import MapContainer from "./components/MapContainer";
import AppContainer from "./components/AppContainer";
import "./App.scss";

function App() {
  return (
    <Router>
      <AppContainer>
        <Route exact path="/" render={props => <Welcome />} />
        <Route exact path="/results" render={props => <MapContainer />} />
      </AppContainer>
    </Router>
  );
}

export default App;
