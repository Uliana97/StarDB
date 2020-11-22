import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import { withData } from "../hoc-helpers/";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withRenderChildren = (Wrapped, fn) => {
  return (props) => <Wrapped {...props}>{fn}</Wrapped>;
};

const peopleData = (i) => `${i.name} (${i.gender})`;
const planetData = (i) => `${i.name} (${i.diameter} km)`;
const starshipData = (i) => `${i.name} (${i.model})`;

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
