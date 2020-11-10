import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorBounary from "../error-boundary";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import { Row } from "../row";

import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 5,
  };

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const itemList = (
      <ErrorBounary>
        <ItemList
          onItemSelected={this.onItemSelected}
          //Мы делаем этот компонент универсальным для людей, кораблей и планет благодаря тому, что мы вынесли отдельно вызов к серверу, который в последствии позвратит промис. Теперь мы можем контролировать извне то, какие данные будет получать и отображать компонент изменяя getAll...
          //Здесь важно не потерять значение this у метода getAllPeople -> использовать ф стрелку!
          getData={this.swapiService.getAllPeople}
          //мы принимаем каждый объект массива и отображаем то, что нам нужно
        >
          {(i) => `${i.name} (${i.gender})`}
        </ItemList>
      </ErrorBounary>
    );

    const personDetails = (
      <ErrorBounary>
        <PersonDetails itemId={this.state.selectedItem} />
      </ErrorBounary>
    );

    return (
      <>
        <Row left={itemList} right={personDetails} />
        <Row left={itemList} right={personDetails} />
      </>
    );
  }
}
