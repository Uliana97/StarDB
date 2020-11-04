import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import { ErrorIndicator } from "../error-indicator";
import PeoplePage from "../peoplePage";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 5,
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    if (this.state.error) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container pb-5">
        <Header />
        <RandomPlanet />
        <ErrorButton />

        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllPlanets}
              //Render функция
              //мы принимаем каждый объект массива и отображаем то, что нам нужно (строки) и даже новые элементы
              renderInfo={(i) => (
                <>
                  <span>{`${i.name} (${i.diameter})`}</span>
                  <button>!!!</button>
                </>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails itemId={this.state.selectedItem} />
            <ErrorButton />
          </div>
        </div>
      </div>
    );
  }
}
