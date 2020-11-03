import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";

import "./app.css";
import { ErrorIndicator } from "../error-indicator";
import PeoplePage from "../peoplePage";

export default class App extends Component {
  state = {
    selectedItem: null,
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container pb-5">
        <Header />
        <RandomPlanet />
        <ErrorButton />

        <PeoplePage />
      </div>
    );
  }
}
