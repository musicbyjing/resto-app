import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import List from "./components/List";
import MapContainer from "./components/MapContainer";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Welcome />
      {/* <MapContainer /> */}
    </React.Fragment>
  );
}

export default App;
