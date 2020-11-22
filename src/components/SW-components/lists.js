import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import { withData } from "../hoc-helpers/";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

export const PeopleList = withData(ItemList, getAllPeople);

export const PlanetList = withData(ItemList, getAllPlanets);

export const StarshipList = withData(ItemList, getAllStarships);
