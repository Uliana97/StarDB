import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import { Spinner } from "../spinner";
import { PlanetInfo } from "./planet-info";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  constructor() {
    super();
    //choose random planet
    this.changePlanet(Math.floor(Math.random() * 25 + 2));
  }

  changePlanet(id) {
    this.swapiService.getPlanet(id).then((planet) => {
      this.setState({
        planet: planet,
        loading: false,
      });
    });
  }

  render() {
    const { planet, loading } = this.state;

    const content = loading ? <Spinner /> : <PlanetInfo planet={planet} />;

    return <div className="random-planet jumbotron rounded">{content}</div>;
  }
}
