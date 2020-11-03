import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";

export default class App extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    return (
      <div className="container pb-5">
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails itemId={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}
