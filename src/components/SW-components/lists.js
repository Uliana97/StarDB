import React from "react";

import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import { withData } from "../hoc-helpers/";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withRenderChildren = (Wrapped, fn) => {
  return (props) => <Wrapped {...props}>{fn}</Wrapped>;
};

const peopleData = (i) => `${i.name}`;
const planetData = (i) => `${i.name}`;
const starshipData = (i) => `${i.name}`;

export const PeopleList = withData(
  withRenderChildren(ItemList, peopleData),
  getAllPeople
);

export const PlanetList = withData(
  withRenderChildren(ItemList, planetData),
  getAllPlanets
);

export const StarshipList = withData(
  withRenderChildren(ItemList, starshipData),
  getAllStarships
);
