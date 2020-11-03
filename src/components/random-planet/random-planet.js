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

  componentDidMount() {
    this.changePlanet();
    this.interval = setInterval(this.changePlanet, 5000);
  }

  //Before Unmounting component we must clear all proceses
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changePlanet = () => {
    this.swapiService
      .getPlanet(Math.floor(Math.random() * 25) + 2)
      .then((planet) => {
        this.setState({
          planet,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
        });
      });
  };

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
