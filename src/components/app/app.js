import React, { Component } from "react";

import Header from "../header";
import ErrorBounary from "../error-boundary";
import { ErrorIndicator } from "../error-indicator";
import RandomPlanet from "../random-planet";
import {
  PeopleDetails,
  PeopleList,
  PlanetDetails,
  PlanetList,
  StarshipDetails,
  StarshipList,
} from "../SW-components";

import "./app.css";

export default class App extends Component {
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

          <PeopleList onItemSelected={this.onItemSelected}>
            {(i) => `${i.name} (${i.gender})`}
          </PeopleList>
          <PeopleDetails id={5} />

          <StarshipList onItemSelected={this.onItemSelected}>
            {(i) => `${i.name} (${i.model})`}
          </StarshipList>
          <StarshipDetails id={5} />

          <PlanetList onItemSelected={this.onItemSelected}>
            {(i) => `${i.name} (${i.diameter})`}
          </PlanetList>
          <PlanetDetails id={5} />
        </ErrorBounary>
      </div>
    );
  }
}
