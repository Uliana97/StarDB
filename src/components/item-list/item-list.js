import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { ErrorIndicator } from "../error-indicator";
import { Spinner } from "../spinner";

import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    items: null,
    error: false,
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((items) => {
        this.setState({ items });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { items, error } = this.state;

    if (!items) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="item-list list-group">
        {items.map(({ id, name }) => (
          <li
            key={id}
            className="list-group-item"
            onClick={() => this.props.onItemSelected(id)}
          >
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
