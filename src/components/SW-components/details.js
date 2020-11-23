import React from "react";

import ItemDetails, { Labels } from "../item-details/item-details";
import SwapiContext from "../context/swapi-context";

export const PeopleDetails = ({ id }) => {
  const { getPerson, getPersonImg } = React.useContext(SwapiContext);

  return (
    <ItemDetails itemId={id} getData={getPerson} getImg={getPersonImg}>
      <Labels field="gender" label="Gender" />
      <Labels field="birthYear" label="Birth Year" />
      <Labels field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export const PlanetDetails = ({ id }) => {
  const { getPlanet, getPlanetImg } = React.useContext(SwapiContext);
  return (
    <ItemDetails itemId={id} getData={getPlanet} getImg={getPlanetImg}>
      <Labels field="diameter" label="Diameter" />
      <Labels field="population" label="Population" />
      <Labels field="rotationPeriod" label="Rotation Period" />
    </ItemDetails>
  );
};

export const StarshipDetails = ({ id }) => {
  const { getStarship, getStarshipImg } = React.useContext(SwapiContext);
  return (
    <ItemDetails itemId={id} getData={getStarship} getImg={getStarshipImg}>
      <Labels field="model" label="Model" />
      <Labels field="manufacturer" label="Manufacturer" />
      <Labels field="crew" label="Crew" />
    </ItemDetails>
  );
};
