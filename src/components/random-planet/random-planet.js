import React, { useState, useEffect } from "react";

import SwapiService from "../../services/swapi-service";
import { Spinner } from "../spinner";
import { PlanetInfo } from "./planet-info";

import "./random-planet.css";

const RandomPlanet = () => {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    changePlanet();
    const interval = setInterval(changePlanet, 5000);
    return () => clearInterval(interval);
  }, []);

  const swapiService = new SwapiService();

  const changePlanet = () => {
    swapiService
      .getPlanet(Math.floor(Math.random() * 25) + 2)
      .then((planet) => {
        setPlanet(planet);
        setLoading(false);
      });
  };

  const content = loading ? <Spinner /> : <PlanetInfo planet={planet} />;

  return <div className="random-planet jumbotron rounded">{content}</div>;
};

export default RandomPlanet;
