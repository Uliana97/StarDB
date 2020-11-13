import React, { Component } from "react";

import { ErrorIndicator } from "../error-indicator";
import { Spinner } from "../spinner";

import "./item-details.css";

export default class ItemDetails extends Component {
  state = {
    itemData: null,
    img: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.newPerson();
  }

  //принимает PrevProps и PrevState
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.newPerson();
    }
  }

  newPerson = () => {
    const { itemId, getData, getImg } = this.props;
    if (!itemId) {
      return;
    }

    //Swapi outside
    getData(itemId)
      .then((itemData) => {
        this.setState({
          itemData,
          loading: false,
          //отдельно работаем с картинками, там другой API
          img: getImg(itemData),
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  render() {
    if (!this.state.itemData) {
      return <span>Choose a hero!</span>;
    }

    if (this.state.loading) {
      return <Spinner />;
    }

    if (this.state.error) {
      return <ErrorIndicator />;
    }

    const { name } = this.state.itemData;

    return (
      <div className="item-details card">
        <img className="item-image" src={this.state.img} alt="img" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {this.props.labels.map((i) => (
              <li className="list-group-item">
                <span className="term">{i.label}</span>
                <span>{this.state.itemData[i.field]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
