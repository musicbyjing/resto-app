import React from "react";

export default function AppContainer(props) {
  return <div style={styles}>{props.children}</div>;
}

const styles = {
  display: "flex",
  width: "100vw",
  height: "100vh"
};
