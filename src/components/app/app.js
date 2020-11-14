import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Header from "../header";
import ErrorBounary from "../error-boundary";
import { ErrorIndicator } from "../error-indicator";
import { Row } from "../row";
import ItemDetails from "../item-details";
import { Labels } from "../item-details/item-details";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 5,
  };

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const {
      getPerson,
      getPersonImg,
      getPlanet,
      getPlanetImg,
    } = this.swapiService;

    if (this.state.error) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container pb-5">
        <Header />
        <ErrorBounary>
          <Row
            left={
              <ItemDetails itemId={4} getData={getPerson} getImg={getPersonImg}>
                <Labels field="gender" label="Gender" />
                <Labels field="birthYear" label="Birth Year" />
              </ItemDetails>
            }
            right={
              <ItemDetails itemId={6} getData={getPlanet} getImg={getPlanetImg}>
                <Labels field="population" label="Population" />
                <Labels field="diameter" label="Diameter" />
              </ItemDetails>
            }
          />
        </ErrorBounary>
      </div>
    );
  }
}
