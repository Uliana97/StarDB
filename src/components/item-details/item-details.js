import React, { Component } from "react";

import { ErrorIndicator } from "../error-indicator";
import { Spinner } from "../spinner";

import "./item-details.css";

export const Labels = ({ itemData, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemData[field]}</span>
    </li>
  );
};
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

    getData(itemId)
      .then((itemData) => {
        this.setState({
          itemData,
          loading: false,
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

    //itemData: birthYear: "41.9BBY", eyeColor: "yellow", gender: "male", id: "4", name: "Darth Vader"
    const { itemData } = this.state;
    const { name } = this.state.itemData;

    return (
      <div className="item-details card">
        <img className="item-image" src={this.state.img} alt="img" />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) =>
              React.cloneElement(child, { itemData })
            )}
          </ul>
        </div>
      </div>
    );
  }
}
