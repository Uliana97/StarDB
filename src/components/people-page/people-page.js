import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorBounary from "../error-boundary";
import ItemList from "../item-list";
import ItemDetails, { Labels } from "../item-details/item-details";
import { Row } from "../row";
import { withData } from "../hoc-helpers/";

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
    const { getPerson, getAllPeople, getPersonImg } = this.swapiService;

    const List = withData(ItemList, getAllPeople);

    const itemList = (
      <ErrorBounary>
        <List onItemSelected={this.onItemSelected}>
          {(i) => `${i.name} (${i.gender})`}
        </List>
      </ErrorBounary>
    );

    const itemDetails = (
      <ErrorBounary>
        <ItemDetails
          itemId={this.state.selectedItem}
          getData={getPerson}
          getImg={getPersonImg}
        >
          <Labels field="gender" label="Gender" />
          <Labels field="birthYear" label="Birth Year" />
        </ItemDetails>
      </ErrorBounary>
    );

    return (
      <>
        <Row left={itemList} right={itemDetails} />
      </>
    );
  }
}
