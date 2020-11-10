import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Header from "../header";
import ErrorBounary from "../error-boundary";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import { ErrorIndicator } from "../error-indicator";
import PeoplePage from "../people-page";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 5,
  };

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    if (this.state.error) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container pb-5">
        <Header />

        <ErrorBounary>
          <RandomPlanet />
          <ErrorButton />
        </ErrorBounary>

        <PeoplePage />
      </div>
    );
  }
}
