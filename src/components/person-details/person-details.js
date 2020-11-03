import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import { Spinner } from "../spinner";

import "./person-details.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    personData: null,
    loading: true,
  };

  componentDidMount() {
    //Here we get person from API just 1x time. Because of compDidMount! == Выполняется только один раз!
    //But if we want to have updates - we need to use it in componentDidUpdate ALSO. With condition!
    this.newPerson();
  }

  //принимает PrevProps и PrevState
  componentDidUpdate(prevProps) {
    //В нашем случае все зависит от прилетающего пропса = this.props.itemId, от его значения зависит то, какого героя мы потом будем запашивать у сервера (API). Сначала меняется id, а уже потом подтягиваюися нужные данные в зависимости от его значения
    //Мы должны отслеживать его состояние и если оно меняется (новое значение !== предыдущее значение)  - мы выполняем запрос к серверу и обновляем состояние компонента (заного рендерим)
    //Условие обязательно, иначе мы будем обновлять состояние бесконечно!
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.newPerson();
    }
  }

  newPerson = () => {
    //Очень важный фактор - где вызывается эта функция! Если в compDiMo, то она вызовется только один раз при инициализации и даже если будут приходить новые данные через this.props.itemID - заново функция не выполнится и соответственно новые данные не звпросятся из API и наше состояние не обновится!
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }

    this.swapiService.getPerson(itemId).then((personData) => {
      this.setState({
        personData,
        loading: false,
      });
    });
  };

  render() {
    if (!this.state.personData) {
      return <span>Choose a hero!</span>;
    }

    if (this.state.loading) {
      return <Spinner />;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.personData;

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="img"
        />

        <div className="card-body">
          <h4>{name}</h4>
          {this.props.itemId}
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
