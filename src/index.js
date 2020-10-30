import React from "react";
import ReactDOM from "react-dom";

class SwapiService {
  __apiBase = "https://swapi.dev/api/";

  async getResource(url) {
    const res = await fetch(`${this.__apiBase}${url}`);
    //if res.status NOT from 200 to 290
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource(`starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`starships/${id}`);
  }
}

const a = new SwapiService();

//I dont want to write it that long! Easier is to make async f and return res.results

// a.getAllPeople().then((people) =>
//   people.results.forEach((el) => {
//     console.log(el.height);
//   })
// );

a.getAllPeople().then((people) => people.forEach((el) => console.log(el.name)));

a.getPerson(5).then((p) => console.log(p.name));

ReactDOM.render(<div>Hi there!</div>, document.getElementById("root"));
