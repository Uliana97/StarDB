import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Header from "../header";
import ErrorBounary from "../error-boundary";
import { ErrorIndicator } from "../error-indicator";

import "./app.css";
import { Row } from "../row";
import ItemDetails from "../item-details";

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
              <ItemDetails
                itemId={4}
                getData={getPerson}
                getImg={getPersonImg}
              />
            }
            right={
              <ItemDetails
                itemId={6}
                getData={getPlanet}
                getImg={getPlanetImg}
              />
            }
          />
        </ErrorBounary>
      </div>
    );
  }
}
