import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import { Spinner } from "../spinner";
import { PlanetInfo } from "./planet-info";
import { ErrorIndicator } from "../error-indicator/error-indicator";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  constructor() {
    super();
    this.changePlanet(12);
  }

  catchError = () => {
    this.setState({
      error: true,
    });
  };

  changePlanet(id) {
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          planet: planet,
          loading: false,
        });
      })
      .catch(this.catchError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const content = error ? (
      <ErrorIndicator />
    ) : loading ? (
      <Spinner />
    ) : (
      <PlanetInfo planet={planet} />
    );

    return <div className="random-planet jumbotron rounded">{content}</div>;
  }
}
