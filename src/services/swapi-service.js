export default class SwapiService {
  __apiBase = "https://swapi.dev/api/";
  __imgUrlBase = "https://starwars-visualguide.com/assets/img";

  async getResource(url) {
    const res = await fetch(`${this.__apiBase}${url}`);
    //if res.status NOT from 200 to 290
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`people/`);
    return res.results.map(this.__transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`people/${id}`);
    return this.__transformPerson(person);
  };

  //деструктурируем itemData
  getPersonImg = ({ id }) => {
    return `${this.__imgUrlBase}/characters/${id}.jpg`;
  };

  getPlanetImg = ({ id }) => {
    return `${this.__imgUrlBase}/planets/${id}.jpg`;
  };

  getStarshipImg = ({ id }) => {
    return `${this.__imgUrlBase}/starships/${id}.jpg`;
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`planets/`);
    return res.results.map(this.__transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}`);
    return this.__transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`starships/`);
    return res.results.map(this.__transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`starships/${id}`);
    return this.__transformStarship(starship);
  };

  makeId(item) {
    //we dont have id from API! here we take id from URL with regular expression
    const regExp = /\/([0-9]*)\/$/;
    //match return just what we have in reg.Exp
    return item.url.match(regExp)[1];
  }

  __transformPlanet = (planet) => {
    return {
      id: this.makeId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  __transformStarship = (starship) => {
    return {
      id: this.makeId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  __transformPerson = (person) => {
    return {
      id: this.makeId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
