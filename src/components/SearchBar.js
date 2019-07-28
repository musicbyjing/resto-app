import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.setState({
    //   value: event.target.value
    // });
    console.log(this.state);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
          value={this.state.value}
        />
        <input type="submit" />
      </form>
    );
  }
}
