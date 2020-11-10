import React, { Component } from "react";

import { ErrorIndicator } from "../error-indicator";
import { Spinner } from "../spinner";

import "./item-list.css";

export default class ItemList extends Component {
  state = {
    items: null,
    error: false,
  };

  componentDidMount() {
    // const { getData } = this.props;

    this.props
      .getData()
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
        {items.map((item) => (
          <li
            key={item.id}
            className="list-group-item"
            onClick={() => this.props.onItemSelected(item.id)}
            //Теперь мы можем контролировать извне то, какие именно данные мы будем отображать
            //Свойства можно передавать пропсами, можно через children
            //Сейчас мы говорим - возьми все, что будет между тегами ItemList и используй тут ({(i) => `${i.name} (${i.gender})`})
            //children это такая же функция (рендер), которая получает данные, только без имени!
          >
            {this.props.children(item)}
          </li>
        ))}
      </ul>
    );
  }
}
