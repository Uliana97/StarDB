import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SwapiService from "../../services/swapi-service";
import SwapiContext from "../context/swapi-context";
import Header from "../header";
import ErrorBounary from "../error-boundary";
import RandomPlanet from "../random-planet";
import { PeoplePage, StarshipPage, PlanetPage } from "../pages/";

import "./app.css";

const App = () => {
  const swapiService = new SwapiService();

  return (
    <div className="container pb-5">
      <ErrorBounary>
        <SwapiContext.Provider value={swapiService}>
          <Router>
            <Header />
            <RandomPlanet />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} />
            <Route path="/starships" component={StarshipPage} />
          </Router>
        </SwapiContext.Provider>
      </ErrorBounary>
    </div>
  );
};

export default App;
