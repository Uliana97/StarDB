import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import { ErrorIndicator } from "../error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import { Row } from "../row";

import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 5,
    error: false,
  };

  //Basic ErrorBounary in lifecykle. Ловит ошибки РЕНДЕРИНГА (state, render comp.did.mount ...) от всех компонентов снизу! Благодаря ему остальная часть приложения, не задетая ошибкой все еще сможет работать!
  //Принимает 2 аргумента error and info. -> debugger -> console -> sources
  componentDidCatch() {
    debugger;
    this.setState({ error: true });
  }

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    if (this.state.error) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        //Мы делаем этот компонент универсальным для людей, кораблей и планет благодаря тому, что мы вынесли отдельно вызов к серверу, который в последствии позвратит промис. Теперь мы можем контролировать извне то, какие данные будет получать и отображать компонент изменяя getAll...
        //Здесь важно не потерять значение this у метода getAllPeople -> использовать ф стрелку!
        getData={this.swapiService.getAllPeople}
        //мы принимаем каждый объект массива и отображаем то, что нам нужно
      >
        {(i) => `${i.name} (${i.gender})`}
      </ItemList>
    );

    const personDetails = <PersonDetails itemId={this.state.selectedItem} />;

    return (
      <>
        <Row left={itemList} right={personDetails} />
        <Row left={itemList} right={personDetails} />
      </>
    );
  }
}
