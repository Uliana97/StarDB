import React from "react";

import ItemDetails, { Labels } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

const {
  getPerson,
  getPersonImg,
  getPlanet,
  getPlanetImg,
  getStarship,
  getStarshipImg,
} = new SwapiService();

export const PeopleDetails = ({ id }) => {
  return (
    <ItemDetails itemId={id} getData={getPerson} getImg={getPersonImg}>
      <Labels field="gender" label="Gender" />
      <Labels field="birthYear" label="Birth Year" />
    </ItemDetails>
  );
};

export const PlanetDetails = ({ id }) => {
  return (
    <ItemDetails itemId={id} getData={getPlanet} getImg={getPlanetImg}>
      <Labels field="diameter" label="Diameter" />
      <Labels field="population" label="Population" />
    </ItemDetails>
  );
};

export const StarshipDetails = ({ id }) => {
  return (
    <ItemDetails itemId={id} getData={getStarship} getImg={getStarshipImg}>
      <Labels field="model" label="Model" />
      <Labels field="crew" label="Crew" />
    </ItemDetails>
  );
};
